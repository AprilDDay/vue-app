import Vue from 'vue'
import { auth } from './firebase'

//import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/app.scss'

//createApp(App).use(store).use(router).mount('#app')

Vue.config.productionTip = false

let app
auth.oAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }

    if (user) {
        store.dispatch('fetchUserProfile', user)
    }
})