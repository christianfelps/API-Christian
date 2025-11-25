import { Router } from "express";
import {CursoController} from "../controller/CursoController"
import { container } from "tsyringe";
export class Routes {
    public routes: Router;
    private CursoController: CursoController = container.resolve('CursoController');
    constructor(){
        this.routes = Router(),
        this.create()
        }

   public create(){
    this.routes.post('/', this.CursoController.createCurso)
   }
}