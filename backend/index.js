const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();

// --- KONFIGURASI CORS YANG PALING AMAN ---
// Izinkan semua permintaan dari domain frontend Anda
const corsOptions = {
  origin: [
    'https://personal-cv-six-beta.vercel.app', // Ganti dengan URL frontend Anda
    'http://localhost:5173' // Untuk development lokal jika perlu
  ],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204
};

// Terapkan CORS sebelum semua rute
app.use(cors(corsOptions));

// Secara eksplisit tangani OPTIONS request (pre-flight)
app.options('*', cors(corsOptions));

app.use(express.json());

// --- RUTE API ANDA ---
app.get('/api/education', (req, res) => {
  console.log("Request diterima di /api/education");
  res.json(educationHistory);
});

app.get('/api/skills', (req, res) => {
  console.log("Request diterima di /api/skills");
  const skillsWithPercent = skills.map(skill => ({
    ...skill,
    percent: skill.level === 'Mahir' ? 90 : skill.level === 'Menengah' ? 70 : 50
  }));
  res.json(skillsWithPercent);
});

app.get('/api/projects', (req, res) => {
  console.log("Request diterima di /api/projects");
  res.json(projects);
});


// Rute tes untuk memastikan server berjalan
app.get('/api', (req, res) => {
  res.send('Backend is running!');
});


// Jalankan server (diabaikan Vercel, tapi bagus untuk lokal)
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server backend berjalan di http://localhost:${PORT}`);
});

// Ekspor aplikasi untuk Vercel
module.exports = app;