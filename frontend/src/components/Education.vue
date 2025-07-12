<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const educationHistory = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/api/education')
    educationHistory.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>

<template>
  <section id="pendidikan" class="py-24 bg-[#0d0d0d] text-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />

      <div class="relative border-l-4 border-cyan-500 mt-16 max-w-3xl mx-auto">
        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-10 ml-6 relative group"
        >
          <!-- Dot -->
          <div
            class="absolute -left-[30px] top-1 w-5 h-5 bg-cyan-500 rounded-full border-4 border-[#0d0d0d] group-hover:scale-125 transition-transform"
          ></div>

          <!-- Content Card -->
          <div
            class="bg-[#161616] p-6 rounded-xl shadow-md border border-gray-800 transition-all duration-300 hover:shadow-cyan-500/20"
          >
            <span class="text-sm font-medium text-cyan-400">{{ edu.period }}</span>
            <h3 class="text-lg font-semibold mt-1 mb-1">{{ edu.institution }}</h3>
            <p class="text-sm text-gray-400">{{ edu.major }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
