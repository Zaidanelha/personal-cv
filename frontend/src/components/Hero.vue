<template>
  <section
    class="relative min-h-screen flex items-center bg-[#0e0e0e] text-white overflow-hidden px-6 md:px-16 py-20"
  >
    <!-- Background Glow -->
    <div class="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-500 blur-[120px] opacity-20 z-0 animate-pulse-slow"></div>
    <div class="absolute bottom-[-80px] right-[-100px] w-[400px] h-[400px] bg-purple-600 blur-[160px] opacity-25 z-0 animate-pulse-slow"></div>

    <!-- Main Content -->
    <div
      class="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-16 w-full"
    >
      <!-- Left: Text -->
      <div class="md:w-1/2 space-y-6 animate-fade-slide-left">
        <h1
          class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
        >
          Halo, Saya<br />
          <span
            class="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
          >
            Muhammad Zaidan Elha Rasyad
          </span>
        </h1>
        <p class="text-lg md:text-xl text-gray-400">
          Mahasiswa Teknik Informatika yang berfokus pada
          <span class="text-white font-medium">pengembangan web</span> &
          <span class="text-white font-medium">desain antarmuka</span> yang
          menarik dan interaktif.
        </p>
        <a
          href="#kontak"
          class="inline-block px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 font-medium animate-fade-slide-up"
        >
          Hubungi Saya
        </a>
      </div>

      <!-- Right: Image -->
      <div class="md:w-1/2 flex justify-center animate-fade-slide-right">
        <div class="relative group">
          <img
            src="/images/z.jpg"
            alt="Foto Profil"
            class="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-gray-800 shadow-2xl transform group-hover:scale-105 transition duration-500 ease-in-out"
          />
          <!-- Ring Glow -->
          <div
            class="absolute inset-0 rounded-full border-[6px] border-cyan-500 opacity-30 blur-xl animate-pulse"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeSlideLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeSlideRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes pulseSlow {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.35;
    transform: scale(1.05);
  }
}

.animate-fade-slide-left {
  animation: fadeSlideLeft 1.2s ease-out both;
}
.animate-fade-slide-right {
  animation: fadeSlideRight 1.2s ease-out both;
}
.animate-fade-slide-up {
  animation: fadeSlideUp 1.2s ease-out both;
}
.animate-pulse-slow {
  animation: pulseSlow 4s ease-in-out infinite;
}
</style>
