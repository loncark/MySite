<template>
  <div>
    <img
      src="/assets/profile_cropped.png"
      alt="Profile Picture"
      class="profile-pic"
    />
    <p class="text-2xl w-full text-center font-bold mt-6">Kristina Lončar</p>
    <div class="grid adaptable-grid gap-2 mt-4 mx-auto">
      <span>Age:</span>
      <span>Gen Z</span>

      <span>Occupation:</span>
      <span>Software Dev</span>

      <span>Location:</span>
      <span>Zagreb <span title="Croatia">🇭🇷</span></span>

      <span>GitHub:</span>
      <a
        href="https://github.com/loncark"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="pi pi-github"></i> loncark
      </a>

      <span>Worldview:</span>
      <span>Optimistic</span>

      <span>Status:</span>
      <span>😊🙏🎉</span>
    </div>
  </div>
</template>

<style scoped>
.profile-pic {
  aspect-ratio: 1 / 1;
  border: 1px solid black;
  border-radius: 50%;
}

.adaptable-grid {
    grid-template-columns: 1fr 1fr;
}
.adaptable-grid > :nth-child(odd) {
  text-align: right;
}
.adaptable-grid > :nth-child(even) {
  text-align: left;
}

@media (max-width: 1040px) {
  .adaptable-grid {
    grid-template-columns: 1fr;
  }
  .adaptable-grid > :nth-child(odd) {
    text-align: center;
  }
  .adaptable-grid > :nth-child(even) {
    text-align: center;
  }
}

@media (max-width: 640px) {
  .profile-pic {
    width: min(200px, 100%);
    align-self: center;
  }
  .adaptable-grid {
    grid-template-columns: 1fr 1fr;
  }
  .adaptable-grid > :nth-child(odd) {
    text-align: right;
  }
  .adaptable-grid > :nth-child(even) {
    text-align: left;
  }
}
</style>