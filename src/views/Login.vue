<template>
    <div id="login">
    <section>
    <div class="col1">
        <h1>Vuegram</h1>
        <p>Welcome to the <a href="https://savvyapps.com" target="_blank">Savvy Apps</a> sample social web app </p>
    </div>
    <div class="col12">
        <form>
            <h1>welcome back</h1>
            <div>
                <label for="email1">email</label>
                <input type="text" placeholder="your@email.com" id="email1" />
            </div><!-- end email label -->
            <div>
                <label for="password1">password</label> 
                <input type="password" placeholder="*****" id="password1"/>
            </div>
            <button class="button">log in</button>
            <div class="extras">
                <a>forgot password</a>  
                <a>create an account</a>
            </div> <!-- end forgot pw -->
        </form>
    </section>
    </div>
</template>

<script>
    export default{

    }
</script>

<style lang="scss" scoped>

</style>