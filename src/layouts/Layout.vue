<!-- Layout.vue -->

<script setup>
import Header from './Header.vue'
import TopBorder from './TopBorder.vue';
</script>
<template>
  <Header />

  <main>
    <TopBorder />
    <!-- Используйте слот (slot) для вставки содержимого каждой страницы -->
    <slot></slot>
  </main>
</template>
  


  