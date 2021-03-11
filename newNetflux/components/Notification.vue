<template>
    <div :class="`is-${type}`" class="notification">
        {{ message }}
    </div>
</template>

<script>
    export default {
        name: 'Notification',
        props: {
            type: {
                type: String,
                default: "success",
                validator: (val)=> ['danger','success'.includes(val)]
            },
            message: {
                type: String,
                default: "",
            },
        },
    }
</script>

<style>
.notification {
    position: relative;
    padding: 2rem;
    margin: 2rem;
}
.is-danger {
    background: rgb(245, 62, 62);
    font-weight: bold;
    border-radius: 20px;
}
.is-success {
    background: rgb(102, 248, 65);
    font-weight: bold;
    border-radius: 20px;
}
</style>