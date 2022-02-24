const admin = require('firebase-admin')
admin.initializeApp()

const auth = admin.auth()

const uid = 'FIeAowvpzvRJ9PxpxQHYM4qrbBv2'

const customClaims = {
  admin: true,
}

;(async () => {
  await auth.setCustomUserClaims(uid, customClaims)
  const user = await auth.getUser(uid)
  console.log('success', user)
  process.exit()
})()
