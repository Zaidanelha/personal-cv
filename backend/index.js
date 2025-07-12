const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();

// Konfigurasi CORS lengkap
const corsOptions = {
  origin: 'https://zaidanelha-portfolio.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Tangani preflight OPTIONS request secara eksplisit
app.options('*', cors(corsOptions));

// Middleware tambahan
app.use(express.json());

// Rute API
app.get('/education', (req, res) => res.json(educationHistory));

app.get('/skills', (req, res) => {
  const skillsWithPercent = skills.map(skill => ({
    ...skill,
    percent: skill.level === 'Mahir' ? 90 : skill.level === 'Menengah' ? 70 : 50
  }));
  res.json(skillsWithPercent);
});

app.get('/projects', (req, res) => res.json(projects));

// Port Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
