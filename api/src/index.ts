import express from 'express';
import bodyParser from "body-parser";
import { Routes } from './router';

require('dotenv').config({silent: true});

const jwt = require('jsonwebtoken');

const app: express.Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', Routes);

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});