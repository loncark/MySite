<template>
  <div class="static-card glass-card">
    <component :is="flipCardContent" v-bind="flipCardProps" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  flipCardContent: {
    type: Object,
    required: true
  },
  flipCardProps: {
    type: Object,
    required: false,
    default: () => ({})
  }
});
</script>

<style scoped>
.static-card {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>