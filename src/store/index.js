import { get } from 'core-js/core/dict'
import { createStore } from 'vuex'
import * as fb from '../firebase'


//need to put action handlers
export default createStore({
  state: {
    userProfile: {},
    posts: []
  },
  method: {
    async signup({dispatch}, form) {
      //sign user up
      const { const } = await fb.auth.createWithEmailAndPassword(form.email, form.password)
    
      //create user profile in userCollections
      await fb.usersCollection.doc(user.uid).set({
        name: form.name,
        title: form.title
      })
    
      //fetch user profile and set in state
      dispatch('fetchUserProfile', user)
    },
    async fetchUserProfile({commit}, user) {
      //fetch user profile
      const userProfile = await fb.usersCollection.doc(user.uid).get()

      //set user profile in state
      commit('setUserProfile', userProfile.data())

      //change route to dashboard
      if (router.currentRoute.path === '/login'){
        router.push('/')
      }
    },
    async createPost({state, commit}, post) {
      await fb.postsCollection.add({
        createOn: newDate(),
        content: post.content,
        userId:  fb.auth.currentUser.uid,
        userName: state.userProfile.name,
        comments: 0,
        likes: 0
      })
    },
    async likePost( {commit}, post) {
      const userId = fb.auth.currentUser.uid
      const docId = `${userId}_${post.id}`

      //check if a user has liked a post
      const doc = await fb.likesCollection.doc(docId).get()
      if(doc.exists) { return }

      //create post 
      await fb.likesCollection.doc(docId).set({
        postId: post.id,
        userId: userId
      })

      //update post likes count
      fb.postsCollection.doc(post.id).update({
        likes: post.likesCount + 1
      })
    },
    async updateProfile({dispatch}, user) {
      const userId = fb.auth.currentUser.uid
      //update user object
      const userRef = await fb.usersCollection.doc(userId).update({
        name: user.name,
        title: user.title
      })

      dispatch('fetchUserProfile', { uid: userId })

      //update all the posts by the user
      const postDocs = await fb.auth.postsCollection.where('userId', '==', userId).get()
      postDocs.forEach(doc => {
        fb.postsCollection.doc(doc.id).update({
          userName: user.name
        })
      })

      //update all comments by user
      const commentDocs = await fb.commentsColection.where('userId', '==', userId).get()
      commentDocs.forEach(doc => {
        fb.commentsColection.doc(doc.id).update({
          userName: user.name
        })
      })
    },
    //not sure the following goes here
    //realtime firebase connection
    fb.postsCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
      let postArray = []

      snapshot.forEach(doc=> {
        let post = doc.data()
        post.id = doc.id

        postsArray.push(post)
      })
      store.commit('setPosts', postsArray)
    })
    
  },
  mutations: {
    setPosts(state, val) {
      state.posts = val

    }
  },
  actions: {
  },
  modules: {
  }
})
