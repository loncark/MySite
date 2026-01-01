<template>
  <div class="root-container">
    <Background />

    <Transition name="fade" mode="out-in">
      <div v-if="showFirstCard" key="first" class="glass-card padding-special">
        <p>Hello, my name is Kristina.</p>
      </div>
      <div v-else-if="secondCardWrapper" key="second" class="glass-card padding-special">
        <p>Welcome to my website!</p>
      </div>
      <div v-else key="third" class="main-content">
        <StaticCard />
        <Card1 />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Background from "./Background.vue";
import StaticCard from "./StaticCard.vue";
import Card1 from "./flip-cards/Card1.vue";

const showFirstCard = ref(true); // true
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
  padding: 30px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
}
.padding-special {
  padding: 10px 20px 10px 20px
}

.glass-card > p {
  margin: 0;
  text-align: center;
}

.main-content {
  width: 950px;
  max-width: 80vw;
  height: 600px;
  max-height: 80vh;
  display: grid;
  grid-template-columns: 28% 72%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
}

/* Fade transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
