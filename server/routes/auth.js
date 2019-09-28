const express = require('express');
const router = express.Router();
// Firebase variables
const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
    projectId: 'nasa2019angular',
    keyFilename: '/home/katrin/Grok/NasaAngular/server/nasa2019angular-firebase-adminsdk-j79gu-2a2d1f0b37.json',
});

router.get('/', (
    (req, res, next) => {
        db.collection('users').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    return res.json(doc.data());
                });
            })
    }));

module.exports = router;
