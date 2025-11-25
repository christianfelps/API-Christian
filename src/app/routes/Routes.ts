import { Router } from "express";
import {CursoController} from "../controller/CursoController"
import { container } from "tsyringe";
export class Routes {
    public routes: Router;
    private cursoController;

    constructor(){
        this.routes = Router();
        this.cursoController = container.resolve(CursoController);
        this.create();
        this.getAll();
        }

   public create(){
    this.routes.post('/', (req, res ) => this.cursoController.createCurso(req, res))
   }
   public getAll(){
    this.routes.get('/', (req, res ) => this.cursoController.getAll(req, res))
   }
}