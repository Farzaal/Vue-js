<template>
  <div>
    <button class="custom-btn" @click="incrementCounter" :style="{ backgroundColor: 'blue' }">
      Increment
    </button>
    <h1>{{message}}: {{ counter }}</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: "CustomButton",
  data() {
    return {
        counter: 0,
    }
  },
  props: {
    message: {
      type: String,
      default: 'Counter',
    },
  },
  methods: {
    incrementCounter() {
      this.counter++;
    }
  }
})
</script>
<style scoped>
  .custom-btn {
    font-size: 24px;
    font-weight: bold;
    color:floralwhite;
    padding: 20px;
    border-radius: 15px;
  }
</style>