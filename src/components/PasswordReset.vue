<template>
    <div class="modal">
         <div class="modal-content">
             <div @click="$emit('close')">close</div>
             <h3>reset</h3>
             <div v-if="!showSuccess">
                 <p>enter your email to reset your passsord</p>
                 <form @submit.prevent>
                     <input v-model.trim="email" placeholder="you@email.com" />
                 </form>
                 <p v-if="errorMsg !== ''" class="error">{{ errorMsg }}</p>
                 <button @click="resetPassword()" class="button">reset</button>
            </div>
            <p v-else>success! Check your email for a reset link.</p>
        </div>   
    </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import { auth } from '@/firebase'

export default ({
 
    data(){
        return {
            email: '',
            showSuccess: false,
            errorMsg: ''

        }
    }, 
    methods: {
        async resetPassword(){
            this.errorMsg = ''

            try {
                await auth.sendPassordResetEmail(this.email)
                this.showSuccess = true
            } catch (err) {
                this.errorMsg = err.message
            }
        }
    }
    //setup() {  
    //},
})
</script>
