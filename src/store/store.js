import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

const store 

Vue.use(Vuex)= new Vuex.Store({
    //apps state
})

export default store

/*
export default new Vuex.Store({
    state: {
        userProfile: {}
    },
    mutations: {
        setUserProfile(state, val){
            state.userProfile = val
        }
    },
    actions: {
        async login({dispatch}, form) {
            //sign user in
            const {user} = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
            //fetch user profile and set in state
            dispatch('fetchUserProfile', user)
        },
        async fetchUserProfile({ commit }, user) {
            //fetch user profile
            const userProfile = await fb.usersCollection.doc(user.uid).get()
            //set user profile in state
            commit('setUserProfile', userProfile.data())
            //change route to dashboard
            router.push('')
        },
        async logout({ commit }) {
            await fb.auth.signOut()

            //clear user profile and redirect to /login
            commit('setUserProfile', {})
            router.push('/login')
        }
    }
})
*/