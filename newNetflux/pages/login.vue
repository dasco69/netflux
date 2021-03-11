<template>
    <div class="page-identification">
        <div class="authentification-content">
            <div class="background-img-auth">
                <img src="@/assets/img/background_auth.jpg" alt="">
            </div>
            <Notification v-if="error" type="danger" :message="error" />
            <div class="authentification">
                <h2>S'identifier</h2>
                <form method="post" @submit.prevent="userLogin">
                    <input
                        v-model="login.name" 
                        type="text" 
                        name="name" 
                        placeholder="Identification">
                    <input
                        v-model="login.password" 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Mot de passe">
                    <button type="submit" class="button-red">s'identifier</button>
                    
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Notification from '../components/Notification.vue'

    export default {
        name: 'Login',
        middelware:'guest',
        components: {
            Notification,
        },
        data() {
            return {
                login: {
                    name: '',
                    password:''
                },
                error: null,
            }
        },
        mounted () {
            if(this.$strapi.user) return this.$router.push('/setting');
        },
        methods: {
            async userLogin() {
                
                 await this.$strapi.login({ identifier: this.login.name, password: this.login.password })
                                    //.then(resp => console.log(resp))
                                    .then(res => this.$router.push('/'))
                                    .catch(err => this.error = err)

            }
        },
    }
</script>
<style>
.authentification-content {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.authentification-content .background-img-auth {
    background-size: cover;
    display: block;
    height: 100%;
    min-height: 100vh;
    overflow: hidden;
    z-index: 0;
    position: absolute;
    width: 100%;
}
.authentification {
    width: 20%;
    height: auto;
    z-index: 1001;
    position: relative;
    padding: 2rem 3rem 5rem;
    border-radius: var(--border-small);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgb(0, 0, 0, 0.5);
    color: var(--color-txt-white);
}
.authentification h2 {
    width:100%;
}
.authentification form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.authentification form input {
    width: 85%;
    margin-bottom: 2rem;
    padding: 1rem;
    border: none;
    border-radius: var(--border-small);
    background: var(--color-grey);
    color: var(--color-txt-white);
}
.authentification form button {
    padding: 0.5rem 1rem;
    width: 100%;
    font-size: 1.2rem;
}

</style>