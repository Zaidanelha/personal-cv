<script setup>
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <footer id="kontak" class="py-20 bg-[#1e1e1e] text-white">
    <div class="container mx-auto px-6 text-center">
      <SectionTitle title="Hubungi Saya" />
      
      <p class="text-xl text-gray-400 mb-8">
        Jangan ragu untuk terhubung atau bertanya.
      </p>

      <a
        href="mailto:emailanda@example.com"
        class="btn-dark inline-block mb-10"
      >
        Kirim Email
      </a>

      <div class="flex justify-center space-x-6 mb-8 text-sm">
        <a
          href="#"
          target="_blank"
          class="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        >
          GitHub
        </a>

        <a
          href="#"
          target="_blank"
          class="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
        >
          LinkedIn
        </a>
      </div>

      <p class="text-gray-600 text-sm">
        &copy; {{ new Date().getFullYear() }} Muhammad Zaidan Elha Rasyad. Dibuat dengan ❤️
      </p>
    </div>
  </footer>
</template>
