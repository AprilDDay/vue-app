<template>
    <header>
        <section>
            <div class="col1">
                <router-link to="/">
                    <h3>Vuegram</h3>
                </router-link>
                <ul class="inline">
                    <li>
                        <router-link to="/">dashboard</router-link>
                    </li>
                    <li>
                        <router-link to="/settings">settings</router-link>
                    </li>
                    <li><a @click="logout()">logout
                    </li>
                </ul>
            </div>
        </section>
    </header>
</template>

<script>
//following auto entered
/*
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
*/

export default {
    methods: {
        logout() {
            this.$store.dispatch('logout')
        }
    }
}

</script>
