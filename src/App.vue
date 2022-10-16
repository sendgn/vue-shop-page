<template>
    <button @click="addLike">Add like</button>
    <h1>Likes: {{ likes }}</h1>
</template>

<script>
    export default {
        data() {
            return {
                likes: 0,
            }
        },
        methods: {
            addLike() {
                this.likes++;
            },
        }
    }
</script>

<style lang="scss" scoped>
    
</style>
