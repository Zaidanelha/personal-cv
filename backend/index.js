const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();

const corsOptions = {
  origin: 'https://personal-cv-six-beta.vercel.app',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());


// --- RUTE BARU YANG LEBIH AMAN ---
const apiRouter = express.Router();

apiRouter.get('/education', (req, res) => res.json(educationHistory));

apiRouter.get('/skills', (req, res) => {
  const skillsWithPercent = skills.map(skill => ({
    ...skill,
    percent: skill.level === 'Mahir' ? 90 : skill.level === 'Menengah' ? 70 : 50
  }));
  res.json(skillsWithPercent);
});

apiRouter.get('/projects', (req, res) => res.json(projects));

// Gunakan router ini dengan prefix /api
app.use('/api', apiRouter);
// --- AKHIR RUTE BARU ---


// Ekspor aplikasi untuk Vercel/Railway
module.exports = app;