const path = require('path');
const os = require('os');
const fs = require('fs');

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

const ServiceAccount = require('./service_account.json');

// const formidable = require('formidable');
const Busboy = require('busboy');

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
  const busboy = new Busboy({ headers: req.headers });

  let formData = {};

  busboy.on('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
    console.log(val);
    formData[fieldname] = val;
  });
  busboy.on('finish', () => {
    let time = formData.time;
    let temp = formData.temp;
    let humidity = formData.humidity;

    let TempDBRef = db.ref(`temp`);
    let TempChildRef = TempDBRef.child(time);
    TempChildRef.set({ value: parseFloat(temp) });

    let HumidityRef = db.ref(`humidity`);
    let HumiditypChildRef = HumidityRef.child(time);
    HumiditypChildRef.set({ value: parseFloat(humidity) });

    res.status(200).send('Success!\n');
  });
  busboy.end(req.rawBody);
});

// Fix '/' path
exports.temp = functions.https.onRequest((req, res) => {
  if (!req.path) {
    req.url = `/${req.url}`; // prepend '/' to keep query params if any
  }
  return TempMonitor(req, res);
});

// Motion monitor
const MotionMonitor = express();

MotionMonitor.get('/', (req, res) => res.status(200));
MotionMonitor.post('/', (req, res) => {
  const busboy = new Busboy({ headers: req.headers });

  let formData = {};
  let uploads = {};

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    let filepath = path.join(os.tmpdir(), fieldname);
    uploads[fieldname] = { file: filepath };
    console.log(`Saving '${fieldname}' to ${filepath}`);
    file.pipe(fs.createWriteStream(filepath));
  });

  busboy.on('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
    console.log(val);
    formData[fieldname] = val;
  });
  busboy.on('finish', () => {
    console.log(uploads);
    let time = formData.time;
    let temp = formData.temp;
    let humidity = formData.humidity;

    let TempDBRef = db.ref(`temp`);
    let TempChildRef = TempDBRef.child(time);
    TempChildRef.set({ value: parseFloat(temp) });

    let HumidityRef = db.ref(`humidity`);
    let HumiditypChildRef = HumidityRef.child(time);
    HumiditypChildRef.set({ value: parseFloat(humidity) });

    res.status(200).send('Success!\n');
  });
  busboy.end(req.rawBody);
});

// Fix '/' path
exports.motion = functions.https.onRequest((req, res) => {
  if (!req.path) {
    req.url = `/${req.url}`; // prepend '/' to keep query params if any
  }
  return MotionMonitor(req, res);
});
