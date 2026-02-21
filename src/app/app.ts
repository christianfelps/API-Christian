import "reflect-metadata";
import "./container/container";
import express, {Express} from 'express'
import { Routes } from "./routes/Routes";
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from "../swagger";


class App {

    public app: Express;
    public routes: Routes;

    constructor(){
       this.app = express();
       this.middlewares();
       this.routes = new Routes();
       this.rotas();
       this.swagger();
       
    }

    

    middlewares(){
        this.app.use(express.json())
    } 

    rotas(){
        this.app.use('/cursos', this.routes.routes)
    }
    swagger(){
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    }

}
export default new App().app;
