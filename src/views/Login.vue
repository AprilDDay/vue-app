<template>
    <div>          
        <form>
            
                <h1>get started</h1>
            <div>  
                <label for="name">Name</label> 
                    <input v-model.trim="signupForm.name" type="text" placeholder="your name here" id="name"> 
            </div>
            <div>
                <label for="title">title</label>
                <input v-model.trim="signupForm.title" type="text" placeholder="Company" id="title" />
            </div>
                <label for="email2">email</label>
                <input v-model.trim="signupForm.email" type="text" placholder="you@email.com" id="email2" />
            <div>
                <label for="password2">password</label>
                <input v-model.trim="signupForm.password" type="password" placeholder="your password (min 6 letters)" id="password2" />
            </div>
            <button @click="signup()" class="button">sign up</button>
            <div class="extras">
                <a @click="toggleForm()">Back to Log in </a>                
            </div>
            <div>
            </div>
        </form>
    </div>

<!-- maybe start of template is here -->
    <div id="login">
        <PasswordReset v-if="showPasswordReset" @close="togglePasswordReset()"></PasswordReset>
    <section>
    <div class="col1">
        <h1>Vuegram</h1>
        <p>Welcome to the <a href="https://savvyapps.com" target="_blank">Savvy Apps</a> sample social web app </p>
    </div>
    <div :class="{ 'signup-form': !showLoginForm }" class="col12">
        <form @submit.prevent>
            <h1>welcome back</h1>
            <div>
                <label for="email1">email</label>
                <input v-model.trim= "loginForm.email" type="text" placeholder="your@email.com" id="email1" />
            </div><!-- end email label -->
            <div>
                <label for="password1">password</label> 
                <input v-model.trim="loginForm.password" type="password" placeholder="*****" id="password1"/>
            </div>
            <button @click="login()" class="button">log in</button>
            <div class="extras">
                <a @click="togglePasswordReset()">forgot password</a>
            </div>  
            <div class="extras">
                <form v-if="showLoginForm" @submit.prevent>
                    <a @click="toggleForm()">create an account</a>
                </form><!-- end of create an account extra -->
                <form v-else @submit.prevent>
                    <a @click="toggleForm()">back to log in</a>
                </form>
            </div> <!-- end forgot extras -->
        </form>
    </section>
    </div>
</template>

<script>
    import PasswordReset from '@/components/PasswordReset'

    export default{
        methods: {
            login(){
                this.$store.dispatch('login', {
                    email: this.loginForm.email,
                    password: this.loginForm.password
                })
            },
            signup(){
                this.$store.dispatch('signup', {
                    email: this.signupForm.email,
                    password: this.signupForm.password,
                    name: this.signupForm.name,
                    title: this.signupForm.title
                })
            },//end signup()
            //not sure if this goes here 
            toggleForm() {
                this.showLoginForm = !this.showLoginForm
            },
            togglePasswordReset(){
                this.showPasswordReset = !this.showPasswordReset
            }
        },
        data() {
            return {
                loginForm: {
                    email: '',
                    password: ''
                },
                signupForm: {
                    name: '',
                    title: '',
                    email: '',
                    password: ''
                },
                //not sure if this makes sense here perhaps it should go somewhere else
                showLoginForm: true,
                showPasswordReset: false 
            }
        },
        components: {
            PasswordReset
        }

    }
</script>

<style lang="scss" scoped>

</style>