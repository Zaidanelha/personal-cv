<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
    projects.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="proyek" class="py-24 bg-[#0d0d0d] text-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <div class="grid md:grid-cols-2 gap-10 mt-16">
        <div
          v-for="project in projects"
          :key="project.title"
          class="group rounded-3xl p-6 bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-cyan-500/30 transition-all duration-500"
        >
          <!-- Gambar -->
          <div class="overflow-hidden rounded-xl mb-5">
            <img
              :src="project.image"
              alt="Preview Proyek"
              class="w-full h-56 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <!-- Judul -->
          <h3 class="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition">
            {{ project.title }}
          </h3>

          <!-- Deskripsi -->
          <p class="text-sm text-gray-400 mb-4">
            {{ project.description }}
          </p>

          <!-- Teknologi -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="bg-cyan-900/30 border border-cyan-600 text-cyan-300 text-xs px-3 py-1 rounded-full font-mono"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Link -->
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:underline transition"
          >
            🔗 Lihat Detail
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
