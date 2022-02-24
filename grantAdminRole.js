const admin = require('firebase-admin')
admin.initializeApp()

const auth = admin.auth()

const uid = 'q5buz4D3yzY7JQ4ZMKu6OyORZ9G2'

const customClaims = {
  admin: true,
}

;(async () => {
  await auth.setCustomUserClaims(uid, customClaims)
  const user = await auth.getUser(uid)
  console.log('success', user)
  process.exit()
})()
