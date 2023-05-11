<template>
    <div :style="{
      backgroundColor: backgroundColor,
      height: `${height}px`,
      width: `${width}px`,
      display: display,
      justifyContent: justifyContent,
      alignItems: alignItems,
      flexDirection: flexDirection,
    }">
      {{ content }}
    </div>
  </template>
  
  <script lang="ts">
  import type * as CSS from 'csstype';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      backgroundColor: {
        type: [Number, String],
        default: "#ddd"
    },
      height: Number,
      width: Number,
      display: String,
      justifyContent: String,
      alignItems: String,
      flexDirection: String,
      content: {
        type: String,
        default: "Hello World"
      },
    },
    computed: {
      style(): CSS.Properties {
        return {
          backgroundColor: this.backgroundColor,
          height: `${this.height}px`,
          width: `${this.width}px`,
          display: this.display,
          justifyContent: this.justifyContent,
          alignItems: this.alignItems,
          flexDirection: this.flexDirection,
        };
      },
    },
  });
  </script>