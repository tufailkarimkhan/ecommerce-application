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

    static async getAll(req: Request, res: Response) {
        try {
            const products = await ProductServices.getAll();
            res.status(200).json(products);
        } catch (error: any) {
            res.status(500).json({ error: error});
        } 
    } 
    
    static async getById(req: Request, res: Response) {
        try {
            const productId = req.params.id;
            const product = await ProductServices.getById(productId);
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error: any) {
            res.status(500).json({ error: error});
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const productId = req.params.id;    
            const updatedProduct = await ProductServices.update(productId, req.body);
            if (updatedProduct) {
                res.status(200).json(updatedProduct);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error: any) {
            res.status(500).json({ error: error});
        }
    }
    static async delete(req: Request, res: Response) {
        try {
            const productId = req.params.id;        
            const deletedProduct = await ProductServices.delete(productId);
            if (deletedProduct) {
                res.status(200).json(deletedProduct);
            } else {
                res.status(404).json({ message: 'Product not found' });
            }
        } catch (error: any) {
            res.status(500).json({ error: error});
        }
    } 
}  