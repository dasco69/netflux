<template>
    <div class="container any-nav">
        <div class="row">
            <h1>Les settings</h1>
            <p>voir les images</p>
            
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

    export default {
        name: 'setting',
        data() {
            return {
                id: this.$strapi.user.id
            }
        },
        computed: {
            ...mapGetters(['isAuthenticated', 'loggedInUser'])
        },
        methods: {
            async getImage() {
                await this.$axios.get('/users', {
                    headers: {
                        Authorization:
                        `Bearer ${this.$strapi.getToken()}`,
                    },
                })
            }
        },
        mounted () {
            this.getImage();
        },
    }
</script>

<style>

</style>