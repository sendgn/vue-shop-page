<template>
    <div class="app">
        <AppHeader />
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import BaseButton from './components/UI/BaseButton.vue';

export default {
    components: {
        AppHeader,
        AppFooter,
        BaseButton,
    },
    data() {
        return {
            
        }
    }
}
</script>

<style lang="scss">
body {
    font-family: $font-family;
    font-size: $font-size;
}

h1, h2, h3, h4, h5, h6 {
    color: $color-text-dark;
}

h1 {
    font-size: $font-size-lg;
    font-weight: 700;
    line-height: 36px;
}

h2 {
    font-size: $font-size-md;
    font-weight: 400;
    line-height: 27px;
}

h3 {
    font-size: $font-size;
    font-weight: 700;
    line-height: 24px;
}

h4 {
    font-size: $font-size-sm;
    font-weight: 700;
    line-height: 21px;
}

h5 {
    font-size: $font-size-sm;
    font-weight: 400;
    line-height: 21px;
}

h6 {
    font-size: $font-size-sm;
    font-weight: 300;
    line-height: 21px;
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 32px;
}

.link {
    text-decoration: none;
}
.link_header {
    color: $color-text-dark;
    &:hover {
        color: $color-btn-hover;
    }
}
</style>
