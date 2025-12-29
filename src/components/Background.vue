<template>
    <div id="petals-container">
        <div v-for="i in 500" :key="i" class="petal"></div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const petalPlayers = ref([]);

function animatePetals() {
  const petals = document.querySelectorAll('.petal');
  
  if (!petals[0].animate) {
    const petalsContainer = document.getElementById('petals-container');
    petalsContainer.prepend("Uh oh, it seems like your browser doesn't support Web Animations API yet. Have you tried this in Firefox or Chrome?");
    return false;
  }

  for (let i = 0, len = petals.length; i < len; ++i) {
    const petal = petals[i];
    petal.innerHTML = '<div class="rotate"><img src="https://qqz.works/wp-content/uploads/2021/08/petal.png" class="askew"></div>';
    const scale = Math.random() * .8 + .2;
    const rotateElement = petal.querySelector('.rotate');
    const randomStartX = Math.random() * 100; // Random X position from 0 to 100vw
    const randomDriftX = (Math.random() - 0.5) * 50; // Random drift amount

    // Falling animation on the petal container
    const player = petal.animate([
      { transform: 'translate3d(' + randomStartX + 'vw,-300px,0) scale(' + scale + ')', opacity: scale },
      { transform: 'translate3d(' + (randomStartX + randomDriftX) + 'vw,150vh,0) scale(' + scale + ')', opacity: 1 }
    ], {
      duration: Math.random() * 90000 + 3000,
      iterations: Infinity,
      delay: -(Math.random() * 5000)
    });

    // Rotation animation on the rotate element
    if (rotateElement) {
      const rotationDuration = Math.random() * 2000 + 2000;
      rotateElement.animate([
        { transform: 'rotateX(0deg)' },
        { transform: 'rotateX(359deg)' }
      ], {
        duration: rotationDuration,
        iterations: Infinity
      });

      // Drift animation on the askew element
      const askewElement = petal.querySelector('.askew');
      if (askewElement) {
        const driftDuration = Math.random() * 2000 + 2000;
        askewElement.animate([
          { transform: 'skewY(10deg) translate3d(-250%, 0, 0)' },
          { transform: 'skewY(-12deg) translate3d(250%, 0, 0)' }
        ], {
          duration: driftDuration,
          iterations: Infinity,
          direction: 'alternate'
        });
      }
    }
    
    petalPlayers.value.push(player);
  }
}

onMounted(() => {
  animatePetals();
});

</script>

<style scoped>
#petals-container {
  background: linear-gradient(#A8E0FF, #A2E8F6, #F8EDCC);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: -1;
}
.petal {
  width: 1rem;
  height: 1rem;
  display: inline-block;
  position: absolute;
  top: -10rem;
  bottom: 0;
  z-index: 150;
  perspective: 1000px;
}

.petal .rotate {
  transform-style: preserve-3d;
  display: block;
  width: 100%;
  height: 100%;
  will-change: transform;
}
.petal .askew {
  background: currentColor;
  transform: skewY(10deg);
  display: block;
  width: 2rem;
  height: 2rem;
  perspective: 1000px;
  will-change: transform;
}

.petal {
  color: rgba(0, 0, 0, 0);
}
</style>