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
            showSuccess: false

        }
    }, 
    methods: {
        async resetPassword(){
            //reset logic
        }
    }
    //setup() {  
    //},
})
</script>
