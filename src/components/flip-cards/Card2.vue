<template>
  <div class="right-side glass-card">
    <div class="flex flex-col gap-2">
      <p class="text-xl font-bold">Skills</p>
      <div class="pl-4">
        <p class="text-l font-bold">Tech Stack</p>
        <div class="mt-4 pr-6 grid grid-rows-2 grid-cols-3 gap-2">
          <div class="flex flex-col justify-center align-center">
            <img src="/assets/tech-logos/dotnet_logo.png" alt=".NET" class="tech-img"/>
            <p class="text-sm text-center mt-1">ASP .NET Core</p>
          </div>
          <div class="flex flex-col justify-center align-center">
            <img src="/assets/tech-logos/vue_logo.png" alt="Vue" class="tech-img"/>
            <p class="text-sm text-center mt-1">Vue 2/3</p>
          </div>
          <div class="flex flex-col justify-center align-center">
            <img src="/assets/tech-logos/js_logo.png" alt="JS" class="tech-img"/>
            <p class="text-sm text-center mt-1">JS / TS</p>
          </div>
          <div class="flex flex-col justify-center align-center">
            <img src="/assets/tech-logos/git_logo.svg" alt="Version" class="tech-img"/>
            <p class="text-sm text-center mt-1">Version Control</p>
          </div>
          <div class="flex flex-col justify-center align-center">
            <img src="/assets/tech-logos/dynamics_logo.png" alt="MSD" class="tech-img"/>
            <p class="text-sm text-center mt-1">MS Dynamics 365</p>
          </div>
          <div class="flex flex-col justify-center align-center">
            <img src="/assets/tech-logos/azure_logo.png" alt="Azure" class="tech-img"/>
            <p class="text-sm text-center mt-1">Microsoft Azure</p>
          </div>
        </div>

        <p class="mt-4 text-l font-bold">Other skills</p>
        <p class="mt-4 pr-6 text-sm break-words">
          The job includes creating/updating multiple CRM-based
          projects yearly as well as manintaining and upgrading the internal
          company CRM and MojCombis web application.
        </p>

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