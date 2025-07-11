<script setup>
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <footer id="kontak" class="bg-[#0d0d0d] text-gray-300 py-20 px-6 border-t border-gray-800">
    <div class="max-w-5xl mx-auto text-center">
      <SectionTitle title="Hubungi Saya" />

      <p class="text-base text-gray-400 mt-4 mb-6 leading-relaxed">
        Tertarik bekerja sama atau punya pertanyaan? Silakan kirim email atau hubungi saya lewat media sosial berikut.
      </p>

      <a
        href="mailto:zaidanelhaa@gmail.com"
        class="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-blue-600 transition duration-300 ease-in-out mb-8"
      >
        ✉️ zaidanelhaa@gmail.com
      </a>

      <div class="flex justify-center gap-6 mt-6 text-lg font-medium">
        <a href="#" class="flex items-center gap-2 hover:text-white transition">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a href="#" class="flex items-center gap-2 hover:text-white transition">
          <i class="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="#" class="flex items-center gap-2 hover:text-white transition">
          <i class="fab fa-instagram"></i> Instagram
        </a>
      </div>

      <div class="border-t border-gray-700 mt-12 pt-6 text-xs text-gray-500">
        &copy; {{ new Date().getFullYear() }} Muhammad Zaidan Elha Rasyad
      </div>
    </div>
  </footer>
</template>
