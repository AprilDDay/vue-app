<template>
    <section id="settings">
        <div class="col1">
            <h3>settings</h3>
            <p>update your profile</p>

            <transition name="fade">
                <p v-if="showSuccess" class="success">profile updated</p>
            </transition>

            <form @submit.prevent>
                <label for="name">name</label>
                <input v-model.trim="name" type="text" :placeholder="userProfile.name" id="name" />

                <label for="title">job title</label>
                <input v-model.trim="title" type="text" :placeholder="userProfile.title" id="title" />

                <button @click="updateProfile()" class="button">update profile</button>
            </form>
        </div>
    </section>
</template>

<script>

    import { mapState } from 'vuex'

    export default {
        data(){
            return {
                name: '',
                title: '',
                showSuccess: false
            }
        },
        computed: {
            ...mapState(['userProfile'])
        },
        methods: {
            updateProfile(){
                this.$store.dispatch('updateProfile', {
                    name: this.name !== '' ? this.name : this.userProfile.name,
                    title: this.title !== '' ? this.title : this.userProfile.title
                })

                this.name = ''
                this.title = ''

                this.showSuccess = true
                setTimeout(() => {
                    this.showSuccess = false
                }, 2000) //2 seconds
            }

        }
    }

//auto added when typed script
/*
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
*/

</script>
