<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .btn {
        color: white;
        font-family: inherit;
        font-weight: 700;
        background: $color-btn-dark;
        padding: 14px 36px;
        border: none;
        cursor: pointer;

        &:hover {
            background: $color-btn-hover;
        }
        &:active,
        &:disabled {
            background: $color-btn-disabled;
        }
    }
</style>