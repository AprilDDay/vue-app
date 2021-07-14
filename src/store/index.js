import { createStore } from 'vuex'
import * as fb from '../firebase'


//need to put action handlers
export default createStore({
  state: {
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
    }
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
