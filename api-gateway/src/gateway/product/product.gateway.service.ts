import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductGatewayService {
    getHello(): string {
        return "Hello from Product Gateway Service";
    }
}