<template>
    <div class="brandList">
        <BrandItem v-for="brand in brandList" :key="brand.id" :imgPath="`${brand.name}`" :imgAlt="brand.alt" />
    </div>
</template>

<script>
import BrandItem from './BrandItem.vue';
export default {
    props: {
        brandList: {
            type: Array,
            default: () => { [] }
        }
    },
    components: {
        BrandItem
    },

}
</script>

<style lang="scss" scoped>
.brandList {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 8px;
    @media (min-width: 769px) {
        grid-template-columns: repeat(3, auto);
        gap: 16px;
    }
}
</style>