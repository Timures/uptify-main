<!-- Header.vue -->

<template>
    <header class="header">
      <div class="logo">
        <Logo />
      </div>
      <nav class="menu" :class="{ 'menu-active': isMenuOpen }">
        <!-- Здесь разместите свои пункты меню -->
        <ul>
          <li><a href="#">Главная</a></li>
          <li><a href="#">О нас</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </nav>
      <NavBtn /> 
    </header>
  </template>
  
  <script>
  import { reactive } from 'vue';
  import Logo from './Logo.vue'
  import NavBtn from './Nav.vue'
  export default {
    components: {
      Logo,
      NavBtn
    },
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Здесь добавьте стили для вашего заголовка и меню */
  /* Пример стилей для адаптивного header: */
  
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: #17293e;
    color: #fff;
  }
  
  .logo img {
    height: 40px;
    width: auto;
  }
  
  .menu {
    display: none;
  }
  
  .menu-active {
    display: block;
  }
  
  .menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }
  
  .menu li {
    margin-right: 20px;
  }
  
  .menu a {
    text-decoration: none;
    color: #fff;
  }
  
  .menu-toggle {
    display: block;
    cursor: pointer;
  }
  
  .menu-toggle span {
    display: block;
    height: 2px;
    width: 20px;
    background-color: #fff;
    margin: 6px 0;
  }
  
  /* Медиа-запрос для адаптивности меню */
  @media (max-width: 768px) {
    .menu {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #17293e;
      padding: 20px;
      display: none;
    }
  
    .menu-active {
      display: block;
    }
  
    .menu ul {
      flex-direction: column;
    }
  
    .menu li {
      margin-right: 0;
      margin-bottom: 10px;
    }
  
    /* .menu-toggle {
      display: block;
    } */
  }
  </style>
  