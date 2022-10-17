<template>
    <header class="header">
        <div class="header__container container">
            <AppNav :items="this.navItems" />
            <SearchBar />
        </div>
    </header>
</template>

<script>
import AppNav from './AppNav.vue';
import SearchBar from './UI/SearchBar.vue';

export default {
    components: {
        AppNav,
        SearchBar,
    },
    data() {
        return {
            navItems: ['Каталог', 'Доставка', 'Оплата', 'Контакты', 'О компании'],
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 96px;
        border-bottom: 1px solid $color-border-light;
        background: $color-white;
        color: $color-text-dark;
    }
    .header__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
</style>