<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="proyek" class="py-24 bg-[#0d0d0d] text-white animate-fade-in">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />

      <div class="space-y-20 mt-16">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          class="flex flex-col lg:flex-row items-start gap-8 group"
        >
          <!-- Gambar -->
          <div class="w-full lg:w-[40%] overflow-hidden rounded-xl">
            <img
              :src="project.image"
              alt="Preview Proyek"
              class="w-full h-60 object-cover rounded-xl transition duration-500 group-hover:scale-105"
            />
          </div>

          <!-- Konten -->
          <div class="w-full lg:w-[60%] space-y-4">
            <h3 class="text-2xl font-bold text-white group-hover:text-cyan-400 transition duration-300">
              {{ project.title }}
            </h3>

            <p class="text-gray-400 text-sm leading-relaxed">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="bg-gray-800 text-cyan-300 text-xs px-3 py-1 rounded-full font-mono"
              >
                {{ tech }}
              </span>
            </div>

            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block mt-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:underline transition"
            >
              🔗 Lihat Detail
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}
</style>
