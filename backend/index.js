const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();

const corsOptions = {
  origin: 'https://zaidanelha-portfolio.vercel.app',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

// --- KEMBALIKAN /api DENGAN CARA YANG BENAR ---
const apiRouter = express.Router();

// Rute sekarang tidak perlu /api lagi di depannya
apiRouter.get('/education', (req, res) => res.json(educationHistory));
apiRouter.get('/skills', (req, res) => {
  const skillsWithPercent = skills.map(skill => ({
    ...skill,
    percent: skill.level === 'Mahir' ? 90 : skill.level === 'Menengah' ? 70 : 50
  }));
  res.json(skillsWithPercent);
});
apiRouter.get('/projects', (req, res) => res.json(projects));

// Express akan menambahkan /api di depan semua rute di atas
app.use('/api', apiRouter);
// --- AKHIR PERUBAHAN ---

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;