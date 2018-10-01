import express from 'express';
import places from './routes/places';
import pricing from './routes/pricing';

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.use('/api/places', places);
app.use('/api/pricing', pricing);

export default app;
