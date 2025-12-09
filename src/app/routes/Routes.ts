import { Router } from "express";
import {CursoController} from "../controller/CursoController"
import { container } from "tsyringe";
import { Request, Response } from "express";
import { Curso } from "../entities/CursoEntity";
export class Routes {
    public routes: Router;
    private cursoController;

    constructor(){
        this.routes = Router();
        this.cursoController = container.resolve(CursoController);
        this.create();
        this.getAll();
        this.getID();
        }

   public create(){
    this.routes.post('/', (req, res ) => this.cursoController.createCurso(req, res))
   }
   public getAll(){
    this.routes.get('/', (req, res ) => this.cursoController.getAll(req, res))
   }
   public getID(){
    this.routes.get('/:id', (req, res) => this.cursoController.getById(req, res))
   }
}