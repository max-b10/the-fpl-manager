import express from 'express';
import cors from 'cors';
import axios from 'axios';
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
app.get('/', (_, res) => {
  res.json({ message: 'server running' });
});
app.get('/general', async (req, res) => {
  try {
    const response = await axios.get(
      'https://fantasy.premierleague.com/api/bootstrap-static/'
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.get('/league/:id', async (req, res) => {
  try {
    const response = await axios.get(
      `https://fantasy.premierleague.com/api/leagues-classic/${req.params.id}/standings/`
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});
app.get('/manager/:id', async (req, res) => {
  try {
    const response = await axios.get(
      `https://fantasy.premierleague.com/api/entry/${req.params.id}/`
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.get('/manager-history/:id', async (req, res) => {
  try {
    const response = await axios.get(
      `https://fantasy.premierleague.com/api/entry/${req.params.id}/history/
      `
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.get('/squad-picks/:fplId/:previousGameweek', async (req, res) => {
  try {
    const { fplId, previousGameweek } = req.params;
    const response = await axios.get(
      `https://fantasy.premierleague.com/api/entry/${fplId}/event/${previousGameweek}/picks/`
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.get('/player-summary/', async (_, res) => {
  try {
    const response = await axios.get(
      `https://fantasy.premierleague.com/api/element-summary/308/`
    );
    const data = response.data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

app.listen(3005, () => {
  console.log('api listening on port 3005');
});
