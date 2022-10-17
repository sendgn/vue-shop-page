<template>
    <nav class="nav">
        <h5 v-for="item in items">
            <a class="link link_header" href="/">{{ item }}</a>
        </h5>
    </nav>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav {
        display: flex;
        gap: 48px;
    }
</style>