const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();
const PORT = 3000;

// Konfigurasi CORS untuk mengizinkan domain Vercel Anda
const corsOptions = {
  origin: 'https://personal-cv-seven-theta.vercel.app',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Education endpoint
app.get('/api/education', (req, res) => res.json(educationHistory));

// Skills endpoint dengan tambahan percent
app.get('/api/skills', (req, res) => {
  const skillsWithPercent = skills.map(skill => ({
    ...skill,
    percent:
      skill.level === 'Mahir' ? 90 :
      skill.level === 'Menengah' ? 70 :
      50 // fallback
  }));
  res.json(skillsWithPercent);
});

// Projects endpoint
app.get('/api/projects', (req, res) => res.json(projects));

// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server backend berjalan di http://localhost:${PORT}`);
});

module.exports = app;