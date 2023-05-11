<template>
    <h3>About Page</h3>
    <CustomButton />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CustomButton from '../components/CustomButton.vue';

export default defineComponent({
  name: 'About',
  components: {
    CustomButton
  },
});
</script>

<style scoped>
    h3 {
        color: green
    }
</style>
