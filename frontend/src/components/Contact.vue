<script setup>
import SectionTitle from './SectionTitle.vue'
</script>

<template>
  <footer id="kontak" class="bg-[#0d0d0d] text-gray-300 py-20 px-6 border-t border-gray-800">
    <div class="max-w-5xl mx-auto text-center">
      <SectionTitle title="Hubungi Saya" />

      <p class="text-base text-gray-400 mt-4 mb-6">
        Tertarik bekerja sama atau punya pertanyaan? Silakan kirim email atau hubungi saya lewat media sosial berikut.
      </p>

      <a
        href="mailto:emailanda@example.com"
        class="inline-block bg-cyan-500 text-white px-5 py-2 rounded-full shadow hover:bg-cyan-600 transition mb-8"
      >
        ✉️ zaidanelhaa@gmail.com
      </a>

      <div class="flex justify-center gap-6 mt-4 text-lg font-medium">
        <a href="#" class="hover:text-white transition">GitHub</a>
        <a href="#" class="hover:text-white transition">LinkedIn</a>
        <a href="#" class="hover:text-white transition">Instagram</a>
      </div>

      <div class="border-t border-gray-700 mt-12 pt-6 text-xs text-gray-600">
        &copy; {{ new Date().getFullYear() }} Muhammad Zaidan Elha Rasyad
      </div>
    </div>
  </footer>
</template>
