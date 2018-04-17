// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

const ServiceAccount = require('./service_account.json');

// formidable plugins
const formidable = require('formidable');

// Initialize AdminSDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://compro-home-monitoring.firebaseio.com'
});

// Initialize Database
const db = admin.database();

// Initialize Express
const express = require('express');

// Temp Monitoring function
const TempMonitor = express();

TempMonitor.get('/', (req, res) => res.send('Temp Monitor Function~ lel'));
TempMonitor.post('/', (req, res) => {
  const TempDBRef = db.ref('temp/');
  TempDBRef.set();
});

exports.temp = functions.https.onRequest(TempMonitor);
