import { Router,Request, Response } from "express";

export class Routes {
    public routes: Router;
    constructor(){
        this.routes = Router()
        this.HelloWorld()
    }

   private HelloWorld(): void{
    this.routes.get('/', (req: Request, res: Response) => {
        res.json({hello: "Hello World!!"})
    })
   }
}