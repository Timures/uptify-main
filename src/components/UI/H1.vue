<!-- H1.vue -->

<template>
    <h1 :style="getStyleObject">{{ title }}</h1>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        default: '#fff',
      },
      fontSize: {
        type: String,
        default: '32px',
      },
    },
    computed: {
      getStyleObject() {
        return {
          color: this.color,
          fontSize: this.fontSize,
        };
      },
    },
  };
  </script>
  