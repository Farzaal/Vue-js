<template>
    <button class="button">Click me</button>
  </template>
  
  <script>
  export default {
      props: {
          colour: String,
          default: 'black'
      }
  }
  </script>
  
  <style>
  .button{
      background-color: v-bind(colour);
  }
  </style>