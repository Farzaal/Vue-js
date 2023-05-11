    <template>
        <h3>Home Page</h3>
        <img alt="Vue logo" src="/vite.svg">
    </template>
    
    <script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        name: 'Home',
        mounted() {
            console.log('Component mounted!');
        }
    });
    </script>
    
    <style scoped>
        h3 {
            color: red
        }
    </style>
    