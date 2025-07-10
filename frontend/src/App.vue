<script setup>
import Preloader from './components/Preloader.vue';
</script>

<template>
  <Preloader />

  <transition name="fade" mode="out-in">
    <div class="min-h-screen bg-[#121212] text-gray-200 font-sans">
      <RouterView />
    </div>
  </transition>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.6s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
