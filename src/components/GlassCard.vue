<template>
  <div class="glass-card">
    <p>Hello, my name is Kristina.</p>
  </div>
</template>

<script setup>
</script>

<style scoped>
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 10px 20px 10px 20px;
  box-shadow: 0 0 30px rgba(100, 200, 255, 0.3);
}

p {
  margin: 0;
  text-align: center;
}
</style>