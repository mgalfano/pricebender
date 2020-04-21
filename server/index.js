const express = require('express');
const app = express();
const path = require('path');
const port = 3001;
const db = require('../database/db.js');
const scrapePrices = require('../scraper');

app.use(express.static(path.join(__dirname, '../public')));

app.get('/database/updater', async function(req, res, next) {
  const result = await scrapePrices();
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));