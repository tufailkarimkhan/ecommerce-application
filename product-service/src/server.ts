import express, { Application,Request,Response } from 'express';
import routers from './routes/Index.routes';
import sequelize from '../config/Db.config';
import dotenv from 'dotenv';
dotenv.config({path: '../../.dev.env'});
import { GoogleGenAI } from "@google/genai";
import { GoogleGenerativeAI } from '@google/generative-ai';


export default class Server {
    private readonly app: Application;
    private readonly PORT: number | string;
    static model: any;
    

    constructor() {
        this.app = express();
        this.PORT = process.env.PORT || 8080;
        this.registerMiddlewares();
        this.registerRoutes();
        this.start();
 //       this.googleGenerativeAI();
    }

   private registerMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

   private registerRoutes() {
        this.app.use('/api' ,routers)
        this.app.use('/*', (req : Request, res : Response) => {
            res.status(404).send({ message: 'Route not found 🤞' });
        });
    }

  /* private  googleGenerativeAI(){
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
        Server.model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    }
    */


    public start() {

        this.app.listen(this.PORT, () => {
            console.log(`Server is running at http://localhost:${this.PORT}`);
        });
        sequelize.sync({alter: true})
            .then(() => {
                console.log('Database connected successfully');
            })
            .catch((error: Error) => {
                console.error('Database connection failed:', error);
            });
    }
}
new Server();