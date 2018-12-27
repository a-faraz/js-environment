import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
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
