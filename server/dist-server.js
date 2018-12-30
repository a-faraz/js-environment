import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
  const users = [
    { id: '0001', first_name: 'Charles', last_name: 'Dickens', email: 'CDickens@email.com' },
    { id: '0002', first_name: 'Mark', last_name: 'Twain', email: 'MTwain@email.com' },
    { id: '0003', first_name: 'George', last_name: 'Orwell', email: 'GOrwell@email.com' }
  ];
  res.json(users);
});

app.listen(port, err => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
  } else {
    open(`http://localhost:${port}`);
  }
});
