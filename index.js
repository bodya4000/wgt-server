const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 4000;

const FILES_DIR = path.join(__dirname, 'files');

app.use(cors());

app.get('/Player.wgt', (req, res) => {
  const wgtPath = path.join(FILES_DIR, 'Player.wgt');
  res.download(wgtPath, 'Player.wgt', err => {
    if (err) console.error('Error sending .wgt:', err);
  });
});

app.get('/sssp_config.xml', (req, res) => {
  const xmlPath = path.join(FILES_DIR, 'sssp_config.xml');
  res.sendFile(xmlPath, err => {
    if (err) console.error('Error sending XML:', err);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
