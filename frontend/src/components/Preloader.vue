<template>
  <div
    class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#0d0d0d] to-[#111] text-white transition-opacity duration-700"
    :class="{ 'opacity-0 pointer-events-none': isLoaded }"
  >
    <!-- Glowing Ring -->
    <div class="relative w-20 h-20 mb-6">
      <div class="absolute inset-0 rounded-full border-4 border-cyan-500/30 animate-pulse ring"></div>
      <div class="absolute inset-2 rounded-full border-t-4 border-cyan-400 border-solid animate-spin-slow"></div>
    </div>

    <!-- Fancy Text -->
    <h1 class="text-2xl font-bold text-cyan-400 animate-fade-in">
      Welcome to My Portfolio
    </h1>
    <p class="text-sm text-gray-400 mt-1 animate-fade-in delay-300">
      Please wait a moment...
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
  }, 2500);
});
</script>

<style scoped>
@keyframes spin-slow {
  to {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  animation: spin-slow 2s linear infinite;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
.delay-300 {
  animation-delay: 0.3s;
}
</style>
