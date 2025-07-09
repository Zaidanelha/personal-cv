<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const skills = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills');
    skills.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="skill" class="py-20 bg-[#121212] text-white">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="bg-[#1e1e1e] p-6 rounded-xl shadow-md text-center transform hover:-translate-y-2 transition-transform duration-300 hover:shadow-cyan-500/10"
        >
          <h3 class="text-xl font-bold text-white">{{ skill.name }}</h3>
          <p class="text-gray-400 mt-2">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
