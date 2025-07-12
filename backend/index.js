const express = require('express');
const cors =require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();

// Konfigurasi CORS Final yang Benar
const corsOptions = {
  origin: 'https://zaidanelha-portfolio.vercel.app', // URL Frontend Anda
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
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

// INI BAGIAN PALING PENTING
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Baris ini diabaikan oleh Railway, tapi tidak apa-apa
module.exports = app;