const admin = require('firebase-admin')
const serviceAccount = require('../../../serviceAccountKey.json')

const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

const firebaseDB = admin.firestore()

module.exports = firebaseDB
