<template>
  <div class="root-container">
    <Background />

    <Transition name="fade" mode="out-in">
      <div v-if="showFirstScreen" key="first" class="glass-card padding-special">
        <p>Hello, my name is Kristina.</p>
      </div>
      <div v-else-if="showSecondScreen" key="second" class="glass-card padding-special">
        <p>Welcome to my website!</p>
      </div>
      <div v-else key="third" class="main-content">
        <SkillCard v-if="showSkillCard && currentSkill" :skill="currentSkill"/>
        <StaticCard v-else/>

        <div class="card-container">
          <Transition name="swap" mode="out-in">
            <Card1 
              v-if="showCard1" 
              @go-card2="showCard2 = true; showCard1 = false"
            />
            <Card2 
              v-else-if="showCard2"
              @go-card1="showCard1 = true; showCard2 = false; handleSkillCardCancel()"
              @dot-net="handleSkillEmit('dot-net')"
              @vue="handleSkillEmit('vue')"
              @js="handleSkillEmit('js')"
              @git="handleSkillEmit('git')"
              @dynamics="handleSkillEmit('dynamics')"
              @azure="handleSkillEmit('azure')"
              @support="handleSkillEmit('support')"
              @bpa="handleSkillEmit('bpa')"
              @presentation="handleSkillEmit('presentation')"
            />
          </Transition>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import Background from "./Background.vue";
import StaticCard from "./StaticCard.vue";
import Card1 from "./flip-cards/Card1.vue";
import Card2 from "./flip-cards/Card2.vue";
import SkillCard from "./SkillCard.vue";
import { SkillService } from "../service/SkillService";
import { Skill } from "../model/Model";

const showFirstScreen = ref(true); // true
const showSecondScreen = ref(false);
const showThirdScreen = ref(false);

const showSkillCard = ref(true);

const showCard1 = ref(true);
const showCard2 = ref(false);

const skillService = new SkillService();
const currentSkill = ref<Skill | undefined>();

function handleSkillEmit(skillId: string) {
  currentSkill.value = skillService.getSkillById(skillId);
  showSkillCard.value = true;
}
function handleSkillCardCancel() {
  showSkillCard.value = false;
  currentSkill.value = undefined;
}

onMounted(() => {
  setTimeout(() => {
    showFirstScreen.value = false;
    showSecondScreen.value = true;
  }, 3000);

  setTimeout(() => {
    showSecondScreen.value = false;
    showThirdScreen.value = true;
  }, 6000);
});
</script>

<style scoped>
.root-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
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

.card-container {
  position: relative;
  width: 100%;
  height: 100%;
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

/* Swap transition styles */
.swap-enter-active,
.swap-leave-active {
  position: absolute;
  width: 100%;
}

.swap-enter-active {
  z-index: 0;
  transition: all 0.15s ease;
}

.swap-leave-active {
  z-index: 1;
  transition: all 0.2s ease-out;
}

.swap-enter-from {
  transform: translate(-5px, 5px); 
  opacity: 0;
}

.swap-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media (max-width: 640px) {
  .main-content {
    grid-template-columns: 1fr;
    height: auto;
  }
}
</style>
