<template>
  <div class="right-side glass-card">
    <div class="flex flex-col gap-2">
      <p class="text-xl font-bold">Skills</p>
      <div class="pl-4">
        <p class="text-l font-bold mt-2">Tech Stack</p>
        <div class="mt-6 pr-6 grid grid-rows-2 grid-cols-3 gap-8">
          <div class="flex flex-col justify-center align-center">
            <img src="/assets/tech-logos/dotnet_logo.png" alt=".NET" class="tech-img"/>
            <p class="text-sm text-center mt-3">ASP .NET Core</p>
          </div>
          <div class="flex flex-col justify-center align-center">
            <img src="/assets/tech-logos/vue_logo.png" alt="Vue" class="tech-img"/>
            <p class="text-sm text-center mt-3">Vue.js 2/3</p>
          </div>
          <div class="flex flex-col justify-center align-center">
            <div class="flex flex-row align-center justify-center gap-2 self-center">
                <img src="/assets/tech-logos/js_logo.png" alt="JS" style="height: 50px; border-radius: 5px; overflow: hidden;"/>
                <img src="/assets/tech-logos/ts_logo.png" alt="TS" style="height: 50px;"/>
            </div>
            <p class="text-sm text-center mt-3">JS / TS</p>
          </div>
          <div class="flex flex-col justify-center align-center">
            <img src="/assets/tech-logos/git_logo.svg" alt="Version" class="tech-img" style="height: 40px;"/>
            <p class="text-sm text-center mt-3">Version Control</p>
          </div>
          <div class="flex flex-col justify-center align-center">
            <img src="/assets/tech-logos/dynamics_logo.png" alt="MSD" class="tech-img"/>
            <p class="text-sm text-center mt-3">Dynamics 365 CRM</p>
          </div>
          <div class="flex flex-col justify-center align-center">
            <img src="/assets/tech-logos/azure_logo.png" alt="Azure" class="tech-img" style="height: 40px;"/>
            <p class="text-sm text-center mt-3">Microsoft Azure</p>
          </div>
        </div>

        <p class="mt-8 text-l font-bold">Other skills</p>
        <div class="mt-6 pr-6 grid grid-cols-3 gap-8">
            <div class="flex flex-col justify-center align-center">
                <img src="/assets/tech-logos/customer_support_logo.png" alt="Support" class="tech-img" style="height: 60px;"/>
                <p class="text-sm text-center mt-3">Customer Support</p>
            </div>
            <div class="flex flex-col justify-center align-center">
                <img src="/assets/tech-logos/analytics_logo.png" alt="Support" class="tech-img" style="height: 60px;"/>
                <p class="text-sm text-center mt-3">Business Analytics</p>
            </div>
            <div class="flex flex-col justify-center align-center">
                <img src="/assets/tech-logos/presentation.png" alt="Support" class="tech-img" style="height: 60px;"/>
                <p class="text-sm text-center mt-3">Presentation Skills</p>
            </div>
        </div>

      </div>
    </div>

    <div class="self-end mt-auto flex flex-row w-fit gap-2">
        <p class="button-class" @click="$emit('go-card1')">￩ Ed & Work</p>
        <p class="button-class">Projects ￫</p>
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
</style>