import { Request, Response, NextFunction } from 'express';
import { productValidationSchema } from '../../validations/product.validation';



export class ValidationProduct {

    static validateProductDetails(req: Request, res: Response, next: NextFunction) {

         const result = productValidationSchema.safeParse(req.body);

         if (!result.success) {
             const errors = result.error.errors.map((err) => err.message);
             return res.status(400).json({ errors });
         }
         next();
    }
}

