
import { ValidationError } from 'class-validator';

export function formatErrors(errors: ValidationError[]): any {
    return {
        statusCode: 400,
        message: errors.map(error => ({
            property: error.property,
            message: Object.values(error.constraints || {})[0]
        })),
        error: 'Bad Request'
    };
}