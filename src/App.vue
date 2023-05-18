<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/component-vue">Component Vue</router-link></li>
      <li><router-link to="/css-properties">CSS Properties</router-link></li>
      <li><router-link to="/lottie">Lottie</router-link></li>
      <li><router-link to="/css-modules">Css Modules</router-link></li>
      <li><router-link to="/style-props">Style Props</router-link></li>
      <li><router-link to="/portal-popup">Portal Popup</router-link></li>
    </ul>
  </nav>
    <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style scoped>
  nav {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }

  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  nav li {
    margin: 0 10px;
  }

  nav a {
    color: #fff;
    text-decoration: none;
  }
</style>
