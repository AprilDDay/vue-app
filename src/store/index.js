import { createStore } from 'vuex'


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
    }
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
