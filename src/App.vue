<template>
  <main>
    <h1>Welcome to MySite</h1>
    <HelloWorld msg="Hello Vue 3 + Vite!" />
  </main>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: { HelloWorld }
}
</script>

<style>
body { font-family: system-ui, sans-serif; margin: 0; padding: 2rem; }
h1 { color: #42b983; }
</style>
