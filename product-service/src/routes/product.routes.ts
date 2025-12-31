import { Router } from 'express';
import FileUpload from '../helper/fileUpload/upload';
import { ValidationProduct } from '../helper/middleware/validationProduct';
import ProductController from '../controller/product.controller';

const productRoutes = Router();

productRoutes.post('/create', ValidationProduct.validateProductDetails, ProductController.create);
productRoutes.get('/testing', (req, res) => {
  res.send('Testing route');
});

export default productRoutes;