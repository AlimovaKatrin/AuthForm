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
        let responseFromFireBase = [];
        db.collection('users').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    console.log(doc.data());
                    responseFromFireBase.push(doc.data())
                });
                return res.json(responseFromFireBase);
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            });
    }));

module.exports = router;
