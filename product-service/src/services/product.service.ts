import PdfParse from "pdf-parse";
import { IProductDetails } from "../interface/product.interface";
import ProductDetails from "../models/product.model";
export default  class ProductServices {

    static async create(product_details: IProductDetails) : Promise<IProductDetails> {
        try{
            const product = await ProductDetails.create(product_details);
            return product;
        }catch(error) {
            throw new Error('Error creating product');
        }
    }

}