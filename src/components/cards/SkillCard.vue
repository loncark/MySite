<template>
  <div>
    <div class="skill">
      <img v-if="props.skill.id == 'dot-net'" src="/assets/tech-logos/dotnet_logo.png" alt=".NET" class="tech-img"/>
      <img v-else-if="props.skill.id == 'vue'" src="/assets/tech-logos/vue_logo.png" alt="Vue.js" class="tech-img"/>
      <div v-else-if="props.skill.id == 'js'"class="grid grid-cols-2 place-items-center justify-self-center">
        <img src="/assets/tech-logos/js_logo.png" alt="JavaScript" class="tech-img" style="width: 80px; border-radius: 5px;"/>
        <img src="/assets/tech-logos/ts_logo.png" alt="TypeScript" class="tech-img" style="width: 80px; border-radius: 5px;"/>
      </div>
      <img v-else-if="props.skill.id == 'git'" src="/assets/tech-logos/git_logo.svg" alt="Git" class="tech-img"/>
      <img v-else-if="props.skill.id == 'dynamics'" src="/assets/tech-logos/dynamics_logo.png" alt="Dynamics 365" class="tech-img"/>
      <img v-else-if="props.skill.id == 'azure'" src="/assets/tech-logos/azure_logo.png" alt="Azure" class="tech-img"/>
      <img v-else-if="props.skill.id == 'support'" src="/assets/tech-logos/customer_support_logo.png" alt="Support" class="tech-img" style="width: 100px;"/>
      <img v-else-if="props.skill.id == 'bpa'" src="/assets/tech-logos/analytics_logo.png" alt="Analytics" class="tech-img" style="width: 100px;"/>
      <img v-else-if="props.skill.id == 'presentation'" src="/assets/tech-logos/presentation.png" alt="Presentation Skills" class="tech-img" style="width: 100px;"/>
      <p class="text-center">{{ props.skill.title }}</p>
    </div>
    <p class="text-sm">{{ props.skill.description1 }}</p>
    <p class="text-sm mt-4">{{ props.skill.description2 }}</p>
    <p class="text-sm mt-4">{{ props.skill.description3 }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from "../../model/Model";

const props = defineProps<{
  skill: Skill;
}>();

</script>

<style scoped>
.skill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto 20px auto;
  gap: 10px;
}

.tech-img {
  max-width: 80%;
  max-height: 100px;
  margin: auto;
  align-self: center;
}

</style>