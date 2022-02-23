const admin = require('firebase-admin')

const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert({
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    token_uri: process.env.FIREBASE_TOKEN_URI,
  }),
})

const firebaseDB = admin.firestore()

module.exports = firebaseDB
