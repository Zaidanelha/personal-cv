const express = require('express');
const cors = require('cors');

// Kita akan gunakan data dummy dulu untuk tes
const testData = [
    {
        "id": 1,
        "period": "Testing",
        "institution": "Backend Berhasil Terhubung!",
        "major": "Tes Data"
    }
];

const app = express();

// Gunakan CORS paling sederhana untuk tes (mengizinkan semua)
app.use(cors());
app.use(express.json());

// Hanya satu rute untuk tes
app.get('/education', (req, res) => {
  res.json(testData);
});

// Port dari Railway
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;