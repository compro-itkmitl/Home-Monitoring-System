// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

const ServiceAccount = require('./service_account.json');

// formidable plugins
const formidable = require('formidable');

// Initialize AdminSDK
admin.initializeApp({
  credential: admin.credential.cert(ServiceAccount),
  databaseURL: 'https://compro-home-monitoring.firebaseio.com'
});

// Initialize Database
const db = admin.database();

// Initialize Express
const express = require('express');
const cors = require('cors');

// Temp Monitoring function
const TempMonitor = express();

TempMonitor.use(cors({ origin: true }));

TempMonitor.get('/', (req, res) => res.status(200));
TempMonitor.post('/', (req, res) => {
  let form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    let time = fields.time;
    let temp = fields.temp;
    let humidity = fields.humidity;

    let TempDBRef = db.ref(`temp/${time}`);
    TempDBRef.set({ value: temp });

    let HumidityRef = db.ref(`humidity/${time}`);
    HumidityRef.set({ value: humidity });
  });

  res.status(200).send('Success!');
});

// Fix '/' path
exports.temp = functions.https.onRequest((req, res) => {
  if (!req.path) {
    req.url = `/${req.url}`; // prepend '/' to keep query params if any
  }
  return TempMonitor(req, res);
});
