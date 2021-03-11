<template>
    <div>
        <!--Si pas session user active on affichepas l'avatar-->
        <div class="avatar" v-if="this.$strapi.user">
            <img 
                @click="goSetting"
                src="@/assets/img/avatar/path482.png" alt="avatar">
        </div>
        
        
    </div>
</template>

<script>

    export default {
        name: 'Avatar',
        methods: {
            goSetting() {
                this.$router.push('/setting')
            }
        },
    }
</script>

<style>
.avatar {
    display: flex;
    justify-content: center;
    margin-left: 2rem;
    cursor: pointer;
}
.avatar img {
    width: 50%;
    background: var(--color-fond-white);
    border: none;
    border-radius: 100px;
    padding: 0.5rem;
    transition: 500ms;
}
.avatar img:hover {
    transform: scale(1.1);
}
</style>