const educationHistory = [
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
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
        title: 'Website Toko Online',
        image: 'https://i.pinimg.com/736x/ff/c8/a2/ffc8a2695f83e2ead09fef74c0dc1065.jpg',
        description: 'Platform e-commerce dengan fitur keranjang belanja.',
        tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
        link: '#'
    },
    {
        title: 'Aplikasi Manajemen Tugas',
        image: 'https://i.pinimg.com/736x/dc/3c/d2/dc3cd2a0ad5375a59f27007fcefb6a7f.jpg',
        description: 'Aplikasi untuk melacak progres tugas harian.',
        tech: ['React', 'Firebase'],
        link: '#'
    }
];
module.exports = { educationHistory, skills, projects };