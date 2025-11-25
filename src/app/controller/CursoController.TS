import {Request, Response} from 'express'
import {CursoService} from '../service/CursoService'
import { Curso } from '../entities/CursoEntity';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
export class CursoController{
    constructor( private CursoService: CursoService, ){}
    
    public createCurso =  ((req: Request<{}, {}, Curso>, res: Response)=>{
        try {
            this.CursoService.create(req.body)
        } catch (error) {
            res.status(400).json({msg: "Erro ao criar curso informaçoes incorretas", error})
        }
    })
}