import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class UserGatewayService {

    async getAllUsers() {
        // Logic to interact with user-service microservice
        console.log("Fetching all users from user-service");
        let response = await axios.get('http://user-service:3000/users/GetAll')

        console.log("Response data:", response);

        return response.data;
    }
}