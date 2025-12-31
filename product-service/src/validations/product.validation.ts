
import { z } from 'zod';

export const productValidationSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(2).max(100),
    description: z.string().min(10).max(1000).optional(),
    mfgDate: z.coerce.date(),
    expiryDate: z.coerce.date(),
    quantity: z.number().int().min(0),
    price: z.number().min(0),
    imageUrl: z.string().url().optional(),
});
