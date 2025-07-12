const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();

// --- PERUBAHAN PENTING UNTUK DEBUGGING ---
// Untuk sementara, izinkan SEMUA permintaan dari domain manapun.
app.use(cors());
// --- AKHIR PERUBAHAN ---

app.use(express.json());

// Education endpoint
app.get('/api/education', (req, res) => res.json(educationHistory));

// Skills endpoint
app.get('/api/skills', (req, res) => {
  const skillsWithPercent = skills.map(skill => ({
    ...skill,
    percent:
      skill.level === 'Mahir' ? 90 :
      skill.level === 'Menengah' ? 70 :
      50
  }));
  res.json(skillsWithPercent);
});

// Projects endpoint
app.get('/api/projects', (req, res) => res.json(projects));

// Baris ini diabaikan oleh Vercel, tapi tidak apa-apa ada di sini.
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server backend berjalan di http://localhost:${PORT}`);
});

// Baris paling penting untuk Vercel
module.exports = app;