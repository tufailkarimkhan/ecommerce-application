import { Router } from "express";
import productRoute from './product.routes';

const routers = Router();

routers.get('/', (req, res) => {
  res.send('Index routes working!');
});

routers.use('/product', productRoute);

export default routers;
