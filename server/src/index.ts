import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'checking it now' });
});
app.listen(8080, () => {
  console.log('Server running on Port 8080');
});
