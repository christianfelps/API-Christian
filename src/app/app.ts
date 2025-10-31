import "reflect-metadata";
import express, {Express} from 'express'
import { Routes } from "./routes/Routes";
 

class App {

    public app: Express;
    public routes: Routes;

    constructor(){
       this.app = express();
       this.middlewares();
       this.routes = new Routes()
       this.rotas()
       
    }

    

    middlewares(){
        this.app.use(express.json())
    } 

    rotas(){
        this.app.use(this.routes.routes)
    }

}
export default new App().app;
