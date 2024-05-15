import 'dotenv/config';
import express from 'express';
import mongoose from './repository/mongoose';
import Router from './libraries/router';

const app = express();

app.use(express.json());
app.use(Router);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB: ${process.env.DB_HOST} => ${process.env.DB_DATABASE}`);
});

mongoose.connection.on('error', (err) => {
  console.error('Error connecting to MongoDB:', err);
});

export default app;