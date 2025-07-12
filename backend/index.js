const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();

// --- KONFIGURASI CORS FINAL YANG BENAR ---
const corsOptions = {
  // Ini adalah alamat website frontend Anda di Vercel
  origin: 'https://zaidanelha-portfolio.vercel.app', 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200
};

// Terapkan CORS dengan opsi di atas
app.use(cors(corsOptions));

app.use(express.json());


// --- RUTE API ANDA ---
// (Kita kembalikan rute /api/ untuk konsistensi)
app.get('/api/education', (req, res) => res.json(educationHistory));

app.get('/api/skills', (req, res) => {
  const skillsWithPercent = skills.map(skill => ({
    ...skill,
    percent: skill.level === 'Mahir' ? 90 : skill.level === 'Menengah' ? 70 : 50
  }));
  res.json(skillsWithPercent);
});

app.get('/api/projects', (req, res) => res.json(projects));


// Port dari Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;