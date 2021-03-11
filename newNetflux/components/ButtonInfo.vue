<template>
    <div>
        <button @click="pushRoute(id)" class="button-information">Plus d'info</button>
    </div>
</template>

<script>
    export default {
        name: 'ButtonInfo',
        props: {
            id: {
              type: Number,
              default: null
            }
        },
        methods: {
            pushRoute(id) {
              this.$router.push(`/movies/${id}`)
            }
        },
    }
</script>

<style >

@media screen and (max-width: 780px) {
    .button-information {
        padding: 0.5em 2em;
        font-size: 1.2rem;
        margin-bottom: 5rem;
    }
}
</style>