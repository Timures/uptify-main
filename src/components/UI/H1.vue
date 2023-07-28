<!-- H1.vue -->

<template>
    <h1 class="custom_h1" :style="getStyleObject">{{ title }}</h1>
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
      }
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
  
  <style lang="scss" scoped>
  .custom_h1 {
    color: var(--white, #FFF);
text-align: center;
font-family: Inter;
font-size: 32px;
font-style: normal;
font-weight: 900;
line-height: 36px; /* 112.5% */
text-transform: uppercase;
@media (min-width: 769px){
  font-size: 108px;
  line-height: 116px;
}
  }
</style>