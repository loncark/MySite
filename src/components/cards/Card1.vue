
<template>
  <div class="right-side glass-card">
    <div class="flex flex-col gap-2">
      <p class="text-xl font-bold">Education</p>
      <div class="pl-4">
        <p class="text-l font-bold">Bachelor in Mathematics</p>
        <p class="text-sm">
          University of Zagreb (Faculty of Science, Department of Mathematics)
          [2016 - 2022]
        </p>
      </div>
      <div class="pl-4">
        <p class="text-l font-bold">Master of Applied Computer Engineering</p>
        <p class="text-sm">Algebra Bernays University [2022 - 2024]</p>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <p class="text-xl font-bold">Work Experience</p>
      <div class="pl-4">
        <p class="text-l font-bold">Junior Software Developer</p>
        <p class="text-sm">Combis d.o.o. [2024 - Present]</p>
        <p class="mt-4 pr-6 text-sm break-words">
          The job includes creating/updating multiple CRM-based
          projects yearly as well as manintaining and upgrading the internal
          company CRM and MojCombis web application.
        </p>
        <p class="mt-4 pr-6 text-sm break-words">
          The projects include primarily MS Dynamics 365 CRM configuration and writing
          supplementary plugins, scripts, webjobs, workflows, Azure functions
          etc. according to customer needs as well as cyclical functionality
          analysis and adaptation.
        </p>
        <p class="mt-4 pr-6 text-sm break-words">
            All achieved in collaboration with an amazing dev team and under the 
            guidance of a great team leader.
        </p>
      </div>
    </div>

    <p class="button-class" @click="$emit('go-card2')">Skills ￫</p>
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

</style>

<style>
.button-class {
  width: fit-content;
  padding: 5px 10px 5px 10px;
  font-size: small;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 25px;
  align-self: end;
  margin-top: auto !important;
}
.button-class:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>