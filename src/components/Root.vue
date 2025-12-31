<template>
    <div class="root-container">
      <Background />

      <Transition name="fade" mode="out-in">
        <div v-if="showFirstCard" key="first" class="glass-card">
          <p>Hello, my name is Kristina.</p>
        </div>
        <div v-else-if="secondCardWrapper" key="second" class="glass-card">
          <p>Welcome to my website!</p>
        </div>
        <div v-else key="third" class="glass-card">
          <div class="main-content">
            <div class="left-side">
              <img src="/home/kristina/Documents/Programs/MySite/public/assets/profile_cropped.png" alt="Profile Picture" class="profile-pic"/>
              <p class="text-2xl w-full text-center font-bold">Kristina Lončar</p>
              <div class="grid grid-cols-2 grid-rows-3 gap-2 mt-4 mx-auto">
                <span class="text-right">Age:</span>
                <span>Gen Z</span>

                <span class="text-right">Occupation:</span>
                <span>Software Dev</span>

                <span class="text-right">Location:</span>
                <span>Zagreb <span title="Croatia">🇭🇷</span></span>

                <span class="text-right">GitHub:</span>
                <span>loncark</span>

                <span class="text-right">Worldview:</span>
                <span>Optimistic</span>

                <span class="text-right">Status:</span>
                <span>Happy!</span>
              </div>
            </div>
            <div class="right-side mt-2">
              <div class="flex flex-col gap-2">
                <p class="text-xl font-bold">Education</p>
                <div class="pl-4">
                  <p class="text-l font-bold">Bachelor in Mathematics</p>
                  <p class="text-sm">University of Zagreb (Faculty of Science, Department of Mathematics) [2016 - 2022]</p>
                </div>
                <div class="pl-4">
                  <p class="text-l font-bold">Master of Applied Computer Engineering</p>
                  <p class="text-sm">Algebra Bernays University [2022 - 2024]</p>
                </div>
              </div>

              <div class="flex flex-col gap-2 mt-4">
                <p class="text-xl font-bold">Work Experience</p>
                <div class="pl-4">
                  <p class="text-l font-bold">Junior Software Developer</p>
                  <p >Combis d.o.o. [2024 - Present]</p>
                  <p class="mt-4 ">Skills:</p>
                  <ul class="list-disc list-inside pl-4">
                    <li>Backend: C# .NET</li>
                    <li>Frontend: Vue 2 + JS / Vue 3 + TS</li>
                    <li>Microsoft Dynamics 365 CRM</li>
                    <li>Business Analytics</li>
                    <li>Customer Support</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Transition>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Background from './Background.vue';
import { Image } from 'primevue';

const showFirstCard = ref(false);   // true
const secondCardWrapper = ref(false);
const thirdCardWrapper = ref(true);

onMounted(() => {
  // setTimeout(() => {
  //   showFirstCard.value = false;
  //   secondCardWrapper.value = true;
  // }, 3000);
  
  // setTimeout(() => {
  //   secondCardWrapper.value = false;
  //   thirdCardWrapper.value = true;
  // }, 6000);
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
.glass-card .padding-special {
  padding: 20px;
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
  grid-template-columns: 30% 70%;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
}

.left-side {
  height: 100%;
  border-right: 1px solid black;
  padding-right: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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

.profile-pic {
  width: 80%;
  aspect-ratio: 1 / 1;
  border: 1px solid black;
  border-radius: 50%;
  margin: 20px auto 20px auto;
}

</style>