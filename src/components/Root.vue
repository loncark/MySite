<template>
    <div class="root-container">
      <Background />

      <div class="glass-card">
        <p v-if="showFirstCard">Hello, my name is Kristina.</p>
        <p v-else-if="secondCardWrapper" >Welcome to my website!</p>
        <div v-else-if="thirdCardWrapper" class="main-content">
          I'm a software developer and this site is a lil' side project.
        </div>
      </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Background from './Background.vue';

const showFirstCard = ref(true);
const secondCardWrapper = ref(false);
const thirdCardWrapper = ref(false);

onMounted(() => {
  setTimeout(() => {
    showFirstCard.value = false;
    secondCardWrapper.value = true;
  }, 3000);
  
  setTimeout(() => {
    secondCardWrapper.value = false;
    thirdCardWrapper.value = true;
  }, 6000);
});
</script>

<style scoped>
.root-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
}

.glass-card {
  background: rgba(255, 255, 255, 0.45);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 10px 20px 10px 20px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
}

.glass-card > p {
  margin: 0;
  text-align: center;
}

.main-content {
  width: 80vw;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>