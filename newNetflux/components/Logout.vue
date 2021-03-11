<template>
    <div class="logout" v-if="this.$strapi.user">
        
        <button @click="logout" class="button-red">Deconnexion</button>
    </div>
</template>

<script>
    export default {
        name: 'Logout',
        middleware: 'auth',
        
        computed: {
            user () {
                return this.$strapi.user
            },
        },
        methods: {
            
            async logout() {
                await this.$strapi.logout()
                this.$router.push('/login')
            }
        },
    }
</script>

<style>
.logout {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
}
.logout button {
    padding: 0.5rem;
}
</style>