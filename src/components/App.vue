<template>
    <h1>Webpack message: {{ message }}</h1>
</template>

<script>
    export default {
        data() {
            return {
                message: null,
            }
        },
        created() {
            this.message = 'Все работает!';
        }
    }
</script>

<style lang="scss" scoped>
    h1 {
        color: red;
    }
</style>
