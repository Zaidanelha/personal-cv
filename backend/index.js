const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();

const corsOptions = {
  // Ganti dengan URL Vercel frontend Anda
  origin: 'https://personal-cv-six-beta.vercel.app', 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

// RUTE TANPA /api
app.get('/education', (req, res) => res.json(educationHistory));

app.get('/skills', (req, res) => {
  const skillsWithPercent = skills.map(skill => ({
    ...skill,
    percent: skill.level === 'Mahir' ? 90 : skill.level === 'Menengah' ? 70 : 50
  }));
  res.json(skillsWithPercent);
});

app.get('/projects', (req, res) => res.json(projects));

// Ekspor aplikasi untuk Vercel/Railway
module.exports = app;