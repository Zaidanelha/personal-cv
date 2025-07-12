const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();

const corsOptions = {
  // Pastikan ini URL Vercel frontend Anda
  origin: 'https://zaidanelha-portfolio.vercel.app', 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204
};

// --- PERUBAHAN KUNCI DI SINI ---
// 1. Tangani permintaan "izin" (pre-flight) secara eksplisit
app.options('*', cors(corsOptions)); 

// 2. Terapkan CORS untuk semua permintaan lainnya
app.use(cors(corsOptions));
// --- AKHIR PERUBAHAN ---

app.use(express.json());

// Rute API Anda
app.get('/education', (req, res) => res.json(educationHistory));
app.get('/skills', (req, res) => {
  const skillsWithPercent = skills.map(skill => ({
    ...skill,
    percent: skill.level === 'Mahir' ? 90 : skill.level === 'Menengah' ? 70 : 50
  }));
  res.json(skillsWithPercent);
});
app.get('/projects', (req, res) => res.json(projects));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;