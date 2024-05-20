import app from "./src/app";

import { logger } from './src/logger';

app.listen(process.env.APP_PORT, () => {
  logger.info(`Listening on: ${process.env.APP_PORT}`);
});