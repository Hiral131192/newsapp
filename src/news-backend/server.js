const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const apiKey = '130ee2ca19774b1bbe2012797ec837f3';

app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);

    res.json(response.data.articles);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch news' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
