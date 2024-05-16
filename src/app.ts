import 'dotenv/config';
import express from 'express';
import mongoose from './repository/mongoose';
import Router from './libraries/router';

import { logger } from './libraries/logger';

const app = express();

app.use(express.json());
app.use(Router);

mongoose.connection.on('connected', () => {
  logger.info(`Connected to MongoDB: ${process.env.DB_HOST} => ${process.env.DB_DATABASE}`);
});

mongoose.connection.on('error', (err) => {
  logger.error(`Error Connecting to MongoDB: ${err}`);
});

export default app;