<template>
  <carousel v-bind:items-to-show="1">
    
      <slide v-for="(chunk, index) in chunkedItems" :key="index">  
        {{ chunkSize}}    
        <BrandList :brandList="chunk" />
    </slide>
   

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>

<script>
import BrandList from '../brands/BrandList.vue';
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { ref, computed, onMounted, onBeforeUnmount, watchEffect } from 'vue';
export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    BrandList
  },
  setup() {
    const items = [{
                id: 1,
                name: '/brands/16.svg',
                alt: 'Trusted by 16 dealers'
            },
            {
                id: 2,
                name: '/brands/KR.svg',
                alt: 'Kenny Ross'
            },
            {
                id: 3,
                name: '/brands/Kia.svg',
                alt: 'KIA of Bedford'
            },
            {
                id: 4,
                name: '/brands/Cohran.svg',
                alt: '1 Cohran'
            },
            {
                id: 5,
                name: '/brands/Honda.svg',
                alt: 'Honda superstore'
            },
            {
                id: 6,
                name: '/brands/Ohio.svg',
                alt: 'Mid Ohio GM'
            },
            {
                id: 7,
                name: '/brands/16.svg',
                alt: 'Trusted by 16 dealers'
            },
            {
                id: 8,
                name: '/brands/KR.svg',
                alt: 'Kenny Ross'
            },
            {
                id: 9,
                name: '/brands/Kia.svg',
                alt: 'KIA of Bedford'
            },
            {
                id: 10,
                name: '/brands/Cohran.svg',
                alt: '1 Cohran'
            },
            {
                id: 11,
                name: '/brands/Honda.svg',
                alt: 'Honda superstore'
            },
           ];

    const chunkSize = ref(window.innerWidth >= 768 ? 6 : 4); // Изначальное значение в зависимости от ширины экрана



    // Вычисляемое свойство для разбиения массива на части по 6 элементов
    const chunkedItems = computed(() => {
      const result = [];
      for (let i = 0; i < items.length; i += chunkSize.value) {
        result.push(items.slice(i, i + chunkSize.value));
      }
      return result;
    });

     // Функция для обновления chunkSize при изменении ширины экрана
    const updateChunkSize = () => {
      chunkSize.value = window.innerWidth >= 768 ? 6 : 4;
    };

    // Используем onMounted для вызова функции updateChunkSize при инициализации компонента
    onMounted(() => {
      updateChunkSize();
    });

    // Добавляем слушателя события "resize" для обновления chunkSize при изменении размера окна
    window.addEventListener('resize', updateChunkSize);

    // Используем onBeforeUnmount для удаления слушателя при демонтировании компонента
    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateChunkSize);
    });

    return {
      chunkedItems,
    };
  },
}
</script>

<style lang="scss">
.carousel__pagination {
  padding: 0;
}
.carousel__pagination-item {
  &:not(:last-child) {
    margin-right: 8px;
  }
}
.carousel__pagination-button {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  padding: 0;
  background: rgba(255, 255, 255, 0.16);
  &--active {
    background: #0A72D4;
  }
  &::after {
    content: none;
  }
}
</style>
