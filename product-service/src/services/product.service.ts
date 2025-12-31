import PdfParse from "pdf-parse";
import { IProductDetails } from "../interface/product.interface";
import ProductDetails from "../models/product.model";
import { Error } from "sequelize";
export default  class ProductServices {

    static async create(product_details: IProductDetails): Promise<IProductDetails> {
        
        const product = await ProductDetails.create(product_details);
        return product;
        
    }

}