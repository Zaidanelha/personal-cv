const educationHistory = [
    { id: 1, period: '2023 - Sekarang', institution: 'KODE INI SUDAH VERSI TERBARU', major: 'S1 - Informatika' },
    { id: 2, period: '2020 - 2023', institution: 'Sma Muhammadiyah 2 Yogyakarta', major: 'Mipa' }
];
const skills = [
  {
    name: 'Vue.js',
    level: 'Mahir',
    percent: 90,
    icon: '/icons/vue.png'
  },
  {
    name: 'Tailwind CSS',
    level: 'Mahir',
    percent: 85,
    icon: '/icons/tailwind.png'
  },
  {
    name: 'Git & GitHub',
    level: 'Mahir',
    percent: 88,
    icon: '/icons/github.png'
  }

]

const projects = [
    {
        title: 'My Portofolio Investment',
        image: '/images/8400.jpg',
        description: '',
        tech: [],
        link: '#'
    },
    {
        title: 'Lucien Avenue',
        image: '/images/lucien.jpg',
        description: '',
        tech: ['Vue.js', 'Bootstrap'],
        link: '#'
    }
];
export { educationHistory, skills, projects };