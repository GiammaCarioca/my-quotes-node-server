const { firebaseAdmin } = require('../services/firebase')

/**
 * Decodes the JSON Web Token sent via the frontend app
 * Makes the currentUser (firebase) data available on the body.
 */
async function decodeIDToken(req, res, next) {
  if (req.headers?.authorization?.startsWith('Bearer ')) {
    const idToken = req.headers.authorization.split('Bearer ')[1]

    try {
      const decodedToken = await firebaseAdmin.auth().verifyIdToken(idToken)
      req['currentUser'] = decodedToken
    } catch (err) {
      console.log(err)
    }
  }

  next()
}

module.exports = {
  decodeIDToken,
}
