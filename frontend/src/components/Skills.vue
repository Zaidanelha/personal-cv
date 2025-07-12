<template>
  <section id="skill" class="py-20 bg-[#0c0c0c] text-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-12">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="group p-6 rounded-xl border border-[#222] bg-gradient-to-br from-[#121212] to-[#1b1b1b] hover:from-[#0f0f0f] hover:to-[#191919] transition-all duration-300 shadow-md hover:shadow-cyan-500/30 hover:scale-105 cursor-pointer"
        >
          <!-- Icon inside circle -->
          <div class="w-16 h-16 bg-[#1f1f1f]/50 rounded-full flex items-center justify-center mb-4 border border-[#333]">
            <img :src="skill.icon" alt="" class="w-8 h-8 object-contain" />
          </div>

          <!-- Skill Name + Level -->
          <div class="text-center mb-4">
            <h3 class="text-white font-semibold text-lg group-hover:text-cyan-400">{{ skill.name }}</h3>
            <p class="text-sm text-gray-400">{{ skill.level }}</p>
          </div>

          <!-- Progress Bar -->
          <div class="w-full bg-gray-800 h-2 rounded-full overflow-hidden mb-1">
            <div
              class="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
              :style="{ width: skill.percent + '%' }"
            ></div>
          </div>
          <p class="text-xs text-gray-500 text-right">{{ skill.percent }}%</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import SectionTitle from './SectionTitle.vue'

const skills = ref([])

onMounted(async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/education`);
    skills.value = response.data
  } catch (error) {
    console.error(error)
  }
})
</script>
