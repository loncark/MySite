<template>
  <div class="right-side glass-card">
    <div class="flex flex-col gap-2">
      <p class="text-xl font-bold">Skills</p>
      <div class="pl-4">
        <p class="text-l font-bold mt-2">Tech Stack</p>
        <div class="skill-grid-1">
          <div class="skill">
            <img src="/assets/tech-logos/dotnet_logo.png" alt=".NET" class="tech-img"/>
            <p class="skill-label">ASP .NET Core</p>
          </div>
          <div class="skill">
            <img src="/assets/tech-logos/vue_logo.png" alt="Vue" class="tech-img"/>
            <p class="skill-label">Vue.js 2/3</p>
          </div>
          <div class="skill">
            <div class="flex flex-row align-center justify-center gap-2 self-center">
                <img src="/assets/tech-logos/js_logo.png" alt="JS" style="height: 50px; border-radius: 5px; overflow: hidden;"/>
                <img src="/assets/tech-logos/ts_logo.png" alt="TS" style="height: 50px;"/>
            </div>
            <p class="skill-label">JS / TS</p>
          </div>
          <div class="skill">
            <img src="/assets/tech-logos/git_logo.svg" alt="Version" class="tech-img" style="height: 40px;"/>
            <p class="skill-label">Version Control</p>
          </div>
          <div class="skill">
            <img src="/assets/tech-logos/dynamics_logo.png" alt="MSD" class="tech-img"/>
            <p class="skill-label">Dynamics 365 CRM</p>
          </div>
          <div class="skill">
            <img src="/assets/tech-logos/azure_logo.png" alt="Azure" class="tech-img" style="height: 40px;"/>
            <p class="skill-label">Microsoft Azure</p>
          </div>
        </div>

        <p class="mt-8 text-l font-bold">Other skills</p>
        <div class="skill-grid-2">
            <div class="skill">
                <img src="/assets/tech-logos/customer_support_logo.png" alt="Support" class="tech-img" style="height: 60px;"/>
                <p class="skill-label">Customer Support</p>
            </div>
            <div class="skill">
                <img src="/assets/tech-logos/analytics_logo.png" alt="Support" class="tech-img" style="height: 60px;"/>
                <p class="skill-label">Business Analytics</p>
            </div>
            <div class="skill">
                <img src="/assets/tech-logos/presentation.png" alt="Support" class="tech-img" style="height: 60px;"/>
                <p class="skill-label">Presentation Skills</p>
            </div>
        </div>

      </div>
    </div>

    <div class="self-end mt-auto flex flex-row w-fit gap-2">
        <p class="button-class" @click="$emit('go-card1')">￩ Ed & Work</p>
        <!-- <p class="button-class">Projects ￫</p> -->
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.right-side {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
}

.tech-img {
  height: 50px;
  margin: auto;
}

.skill {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.skill-label {
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-align: center;
  margin-top: 0.75rem;
}

.skill-grid-1 {
  margin-top: 1.5rem;
  padding-right: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
}

.skill-grid-2 {
  margin-top: 1.5rem;
  padding-right: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
}

@media (max-width: 1024px) {
  .skill-grid-1,
  .skill-grid-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  .skill-grid-1,
  .skill-grid-2 {
    grid-template-columns: 1fr;
  }
}
</style>