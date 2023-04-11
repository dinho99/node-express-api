import express from 'express'; //uguale a dire const express = require('express');
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); //we are gonna use json data in whole app

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello from Homepage'));

app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));