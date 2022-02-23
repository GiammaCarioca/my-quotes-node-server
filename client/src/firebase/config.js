import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA1uvYdv2Z-vm0B5WUqmU3TVbCOzn8OWAM',
  authDomain: 'node-on-fire-d851e.firebaseapp.com',
  projectId: 'node-on-fire-d851e',
  storageBucket: 'node-on-fire-d851e.appspot.com',
  messagingSenderId: '400091870291',
  appId: '1:400091870291:web:bebda880be9b7d4b5cc2a6',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
