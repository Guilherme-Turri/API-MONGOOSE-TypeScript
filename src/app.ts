//ENV VARIABLES
require('dotenv').config();

import express from 'express';
import config from 'config';

const app = express();

//JSON MIDDLEWARE
app.use(express.json());

// Routes
import router from './router';
app.use('/api/', router);

//DB
import connect from '../config/db';

//app port
const port = config.get<number>('port');

app.listen(port, async () => {
  await connect();

  console.log(`app rodando na porta ${port}`);
});
