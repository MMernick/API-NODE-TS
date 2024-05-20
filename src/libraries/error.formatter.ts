
import { ValidationError } from 'class-validator';

export const formatErrors = ((errors: ValidationError[]): any => {
  return {
    statusCode: 400,
    error: 'Bad Request',
    message: errors.map(error => ({
      property: error.property,
      message: Object.values(error.constraints || {})[0]
    }))
  };
});