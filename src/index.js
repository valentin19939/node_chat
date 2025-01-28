'use strict';

import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3005;

app.get('/', (req, res) => {
  res.send('Hello bro, server is listening!');
});

app.listen(port, () => {
  // console.log(`Server started on http://localhost:${port}`);
});
