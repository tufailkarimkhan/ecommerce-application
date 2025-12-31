import { Request, Response } from 'express';
import ProductServices from '../services/product.service';
export default class ProductController {

    static async create(req: Request, res: Response) {
        try {
            const productDetails = req.body;
            const createdProduct = await ProductServices.create(productDetails);
            res.status(201).json(createdProduct);
        } catch (error: any) {
            res.status(500).json({ error: error});
        }
    }
}