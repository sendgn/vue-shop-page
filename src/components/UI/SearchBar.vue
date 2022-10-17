<template>
    <div class="search">
        <input class="search__input input" type="text" placeholder="Поиск по названию картины">
        <BaseButton>
            Найти
        </BaseButton>
    </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
export default {
    components: {
        BaseButton,
    }
}
</script>

<style lang="scss" scoped>
    .search {
        display: flex;
    }
    .search__input {
        border-right: none;
        width: 294px;
    }
    .input {
        border: 1px solid $color-border-light;
        padding: 14px 16px;
        font-family: $font-family;
        color: $color-text-dark;
        &::placeholder {
            font-family: $font-family;
            font-size: $font-size-sm;
        }
        &:focus {
            outline: none;
            border: 1px solid $color-btn-dark;
            border-right: none;
        }
    }
</style>