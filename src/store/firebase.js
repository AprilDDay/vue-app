import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

//firebase init 
const firebaseConfig = {
    //insert own firebase config here without secrets if posting publicly on Github
}

firebase.initializeApp(firebaseConfig)

//utils
const db = firebase.firestore()
const auth = firebase.auth()

//collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

//export utils/refs
export {
    db,
    auth,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection
}