<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/education');
    educationHistory.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="pendidikan" class="py-24 bg-[#121212] text-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Riwayat Pendidikan" />

      <div class="relative mt-16">
        <!-- Garis Tengah -->
        <div class="absolute left-1/2 transform -translate-x-1/2 h-full border-l border-cyan-800"></div>

        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="relative mb-16 flex justify-between items-center w-full group"
        >
          <!-- Kiri -->
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 text-right space-y-1">
              <p class="text-sm text-cyan-400 font-medium">{{ edu.period }}</p>
              <div class="bg-[#1e1e1e] p-5 rounded-xl shadow-lg transition hover:shadow-cyan-600/20">
                <h3 class="text-2xl font-bold text-white">{{ edu.institution }}</h3>
                <p class="text-sm text-gray-400">{{ edu.major }}</p>
              </div>
            </div>
            <div class="w-1/2 flex justify-start items-center relative">
              <div class="w-4 h-4 bg-cyan-400 rounded-full shadow-lg ring-4 ring-cyan-800 animate-pulse"></div>
            </div>
          </div>

          <!-- Kanan -->
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end items-center relative">
              <div class="w-4 h-4 bg-cyan-400 rounded-full shadow-lg ring-4 ring-cyan-800 animate-pulse"></div>
            </div>
            <div class="w-1/2 pl-8 text-left space-y-1">
              <p class="text-sm text-cyan-400 font-medium">{{ edu.period }}</p>
              <div class="bg-[#1e1e1e] p-5 rounded-xl shadow-lg transition hover:shadow-cyan-600/20">
                <h3 class="text-2xl font-bold text-white">{{ edu.institution }}</h3>
                <p class="text-sm text-gray-400">{{ edu.major }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
