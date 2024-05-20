import { Request, Response, NextFunction } from 'express';
import { logger } from '../logger';

export const errorHandling = ((err: SyntaxError | any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof SyntaxError && 'body' in err) {
    logger.error(`Invalid JSON payload: ${err.message}`);
    return res.status(400).send({
      statusCode: 400,
      error: 'Bad Request',
      message: 'Invalid JSON payload'
    });
  }
  next();
});