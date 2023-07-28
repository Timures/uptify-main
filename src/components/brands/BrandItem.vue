<template>
    <figure class="brandItem">
        <img :src="imgPath" alt="`${imgAlt}`">
    </figure>
</template>

<script>
export default {
    props: {
        imgPath: {
            type: String,
            default: '',
            required: true
        },
        imgALt: {
            type: String,
            default: 'Brand Image'
        }
    }
}
</script>

<style lang="scss" scoped>
.brandItem {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 128px;
    max-height: 128px;
    width: 140px;
    max-width: 140px;
    border-radius: 16px;
    margin: 0;
    background: linear-gradient(315deg, rgba(51, 123, 190, 0.20) 0%, rgba(51, 123, 190, 0.00) 100%), rgba(255, 255, 255, 0.08);
    img {
        max-height: 80%;
        max-width: 80%;
    }
    @media (min-width: 769px) {
        min-height: 256px;
        width: 309px;
        min-width: 309px;
    }
}
</style>