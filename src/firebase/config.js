const { initializeApp } = require('firebase-admin/app')

const serviceAccount = require('../../../serviceAccountKey.json')

initializeApp({
  credential: admin.credential.cert(serviceAccount),
})

// const admin = require('firebase-admin')

// const serviceAccount = require('../../../serviceAccountKey.json')

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// })
