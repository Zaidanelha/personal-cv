<template>
  <header
    id="navbar"
    class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[92%] md:w-[85%] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-3 flex justify-between items-center shadow-md transition-all duration-300"
  >
    <!-- Logo -->
    <div class="text-xl font-extrabold text-cyan-400 tracking-tight">
      MZ<span class="text-white"></span>
    </div>

    <!-- Desktop Menu -->
    <nav class="hidden md:flex space-x-6 font-medium text-sm">
      <a
        v-for="link in navLinks"
        :key="link.href"
        :href="link.href"
        class="relative group text-white hover:text-cyan-400 transition"
      >
        {{ link.text }}
        <span
          class="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"
        ></span>
      </a>
    </nav>

    <!-- Hamburger -->
    <button @click="toggleMenu" class="md:hidden text-white text-2xl focus:outline-none">
      <span v-if="!isOpen">☰</span>
      <span v-else>✕</span>
    </button>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <ul
        v-if="isOpen"
        class="absolute top-full left-0 w-full bg-[#0d0d0d] rounded-xl mt-2 py-4 flex flex-col items-center space-y-4 border border-white/10"
      >
        <li v-for="link in navLinks" :key="link.href">
          <a
            :href="link.href"
            @click="toggleMenu"
            class="text-white text-base font-medium hover:text-cyan-400 transition"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const navLinks = [
  { text: 'Profil', href: '#profil' },
  { text: 'Pendidikan', href: '#pendidikan' },
  { text: 'Skill', href: '#skill' },
  { text: 'Proyek', href: '#proyek' },
  { text: 'Kontak', href: '#kontak' },
]
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
