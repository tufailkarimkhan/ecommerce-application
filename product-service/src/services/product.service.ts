import PdfParse from "pdf-parse";
import { IProductDetails } from "../interface/product.interface";
import ProductDetails from "../models/product.model";
import { Error } from "sequelize";
export default  class ProductServices {

    static async create(product_details: IProductDetails): Promise<IProductDetails> {
        
        const product = await ProductDetails.create(product_details);
        return product;
        
    }

    static async getAll(): Promise<IProductDetails[]> {
        const products = await ProductDetails.findAll();
        return products;
    }

    static async getById(id: string): Promise<IProductDetails | null> {
        const product = await ProductDetails.findByPk(id);
        return product;
    }

    static async update(id: string, product_details: IProductDetails): Promise<IProductDetails | null> {
        const product = await ProductDetails.findByPk(id);
        if (product) {
            await product.update(product_details);
            return product;
        }
        return null;
    }

    static async delete(id: string): Promise<IProductDetails | null> {
        const product = await ProductDetails.findByPk(id);
        if (product) {
            console.log("Deleting product:", product);
            //await product.destroy();
            return product;
        }
        return null;
    }

}