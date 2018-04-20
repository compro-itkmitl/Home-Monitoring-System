const path = require('path');
const os = require('os');
const fs = require('fs');
const util = require('util');

// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');

const ServiceAccount = require('./service_account.json');

const Busboy = require('busboy');

const telegram = require('telegram-bot-api');

// Initialize AdminSDK
admin.initializeApp({
  credential: admin.credential.cert(ServiceAccount),
  databaseURL: 'https://compro-home-monitoring.firebaseio.com'
});

// Initialize Database
const db = admin.firestore();

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
    formData[fieldname] = val;
  });
  busboy.on('finish', () => {
    let time = formData.time;
    let temp = parseFloat(formData.temp);
    let humidity = parseFloat(formData.humidity);
    let deviceID = formData.device_id;
    let accessKey = formData.access_key;

    db
      .collection(deviceID)
      .doc('info')
      .get()
      .then((doc) => {
        if (doc.exists) {
          let data = doc.data();
          if (accessKey !== data.access_key) {
            res.send(401);
          } else {
            db
              .collection(deviceID)
              .doc(time)
              .set({
                temp: temp,
                humidity: humidity
              })
              .then(() => {
                res.status(200).send('Success!\n');
              })
              .catch((err) => {
                res.send(500);
              });
          }
        } else {
          res.status(404);
        }
      })
      .catch((err) => {
        console.log(err);
        res.send(500);
      });
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
    let filepath = path.join(os.tmpdir(), fieldname + path.extname(filename));
    uploads[fieldname] = { file: filepath };
    file.pipe(fs.createWriteStream(filepath));
  });

  busboy.on('field', (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) => {
    formData[fieldname] = val;
  });
  busboy.on('finish', () => {
    let time = formData.time;
    let owner = parseInt(formData.owner);
    let deviceID = formData.device_id;
    let accessKey = formData.access_key;
    let photo = uploads.photo.file;
    console.log(photo);
    console.log(formData);
    console.log(owner);
    db
      .collection(deviceID)
      .doc('info')
      .get()
      .then((doc) => {
        if (doc.exists) {
          let data = doc.data();
          if (accessKey !== data.access_key) {
            res.send(401);
          } else {
            let api = new telegram({
              token: functions.config().motion.telegram_apikey
            });

            api
              .sendPhoto({
                chat_id: owner,
                caption: 'Motion detected in yours house!',

                // you can also send file_id here as string (as described in telegram bot api documentation)
                photo: photo
              })
              .then((data) => {
                console.log(util.inspect(data, false, null));
                res.status(200).send('Success!\n');
              })
              .catch((err) => {
                console.log(err);
                res.status(500);
              });
          }
        } else {
          res.status(404);
        }
      })
      .catch((err) => {
        console.log(err);
        res.send(500);
      });
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
