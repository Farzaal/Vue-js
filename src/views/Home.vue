<template>
    <h3>Home Page</h3>
    <img alt="Vue logo" src="/vite.svg">
    <div :class="$style.txt_blue">
        Blue Color
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    data() {
        return {
            description: 'KFC'
        }
    },
});
</script>
    
<style module>
.txt_blue {
    background-color: #ddd;
    color: blue;
    padding: 10px;
}
</style>
