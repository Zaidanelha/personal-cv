const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();

// --- KONFIGURASI CORS PALING AMAN ---
const allowedOrigins = ['https://zaidanelha-portfolio.vercel.app'];

const corsOptions = {
  origin: (origin, callback) => {
    // Izinkan jika origin ada di dalam daftar, atau jika tidak ada origin (seperti request dari Postman/server)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204
};

// Tangani pre-flight request untuk semua rute
app.options('*', cors(corsOptions));

// Terapkan CORS untuk semua request
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

// Port dari Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;