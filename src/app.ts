import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from './data-source/mongoose';
import Router from './router';

import { logger } from './logger';
import { errorHandling } from './middlewares/error.handling.middleware';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(Router);
app.use(errorHandling);

mongoose.connection.on('connected', () => {
  logger.info(`Connected to MongoDB: ${process.env.DB_HOST} => ${process.env.DB_DATABASE}`);
}).on('error', (err) => {
  logger.error(`Error Connecting to MongoDB: ${err}`);
});

export default app;