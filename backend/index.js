const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();

// --- KONFIGURASI CORS YANG BENAR ---
const corsOptions = {
  // Ganti dengan URL Vercel frontend Anda yang benar
  origin: 'https://personal-cv-six-beta.vercel.app',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200 
};

// Terapkan CORS dengan opsi di atas
app.use(cors(corsOptions));

app.use(express.json());

// --- RUTE API ANDA ---
app.get('/api/education', (req, res) => res.json(educationHistory));
app.get('/api/skills', (req, res) => {
  const skillsWithPercent = skills.map(skill => ({
    ...skill,
    percent: skill.level === 'Mahir' ? 90 : skill.level === 'Menengah' ? 70 : 50
  }));
  res.json(skillsWithPercent);
});
app.get('/api/projects', (req, res) => res.json(projects));

// Ekspor aplikasi untuk Vercel
module.exports = app;