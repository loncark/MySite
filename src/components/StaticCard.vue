<template>
  <div class="static-card glass-card">
    <img
      src="/assets/profile_cropped.png"
      alt="Profile Picture"
      class="profile-pic"
    />
    <p class="text-2xl w-full text-center font-bold mt-6">Kristina Lončar</p>
    <div class="grid adaptable-grid gap-2 mt-4 mx-auto">
      <span class="text-right">Age:</span>
      <span>Gen Z</span>

      <span class="text-right">Occupation:</span>
      <span>Software Dev</span>

      <span class="text-right">Location:</span>
      <span>Zagreb <span title="Croatia">🇭🇷</span></span>

      <span class="text-right">GitHub:</span>
      <a
        href="https://github.com/loncark"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="pi pi-github"></i> loncark
      </a>

      <span class="text-right">Worldview:</span>
      <span>Optimistic</span>

      <span class="text-right">Status:</span>
      <span>😊🙏🎉</span>
    </div>
  </div>
</template>

<style scoped>
.static-card {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.profile-pic {
  aspect-ratio: 1 / 1;
  border: 1px solid black;
  border-radius: 50%;
}

.adaptable-grid {
    grid-template-columns: 1fr 1fr;
}

@media (max-width: 1040px) {
  .adaptable-grid {
    grid-template-columns: 1fr;
  }
  .adaptable-grid span {
    text-align: center;
  }
}
</style>