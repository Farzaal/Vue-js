<template>
    <button :class="$style.button" >Css Modules Button</button>
  </template>
  
  <style module>
    .button {
      background-color: red;
      color: white;
    }
  </style>