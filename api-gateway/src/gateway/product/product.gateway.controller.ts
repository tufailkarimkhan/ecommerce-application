import { Controller, Get, Post, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { ProductGatewayService } from './product.gateway.service';

//@UseGuards(JwtAuthGuard)
@Controller('api/products')
export class ProductGatewayController {
    constructor(private readonly productGatewayService: ProductGatewayService) { }

    @Post('/create')
    createProduct() {
        return this.productGatewayService.createProduct();
    }
    
    
    
    @Get('/all')
    getAllProducts() {
        return this.productGatewayService.getAllProducts();
    }


    @Get('/:id')
    getProductById(@Param('id') id: string) {
        return this.productGatewayService.getProductById(id);
    }

    @

}

