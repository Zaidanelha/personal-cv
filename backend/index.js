const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();

const corsOptions = {
  // Pastikan ini URL Vercel frontend Anda
  origin: 'https://zaidanelha-portfolio.vercel.app', 
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

// Ini baris yang kita perbaiki
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Baris ini diabaikan oleh Railway, tapi bagus untuk ada
module.exports = app;