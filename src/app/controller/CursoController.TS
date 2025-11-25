import {Request, Response} from 'express'
import {CursoService} from '../service/CursoService'
import { Curso } from '../entities/CursoEntity';
import {inject, injectable } from 'tsyringe';

@injectable()
export class CursoController{

    constructor( 
        @inject(CursoService)
        private CursoService: CursoService 
    ){}
    
    public createCurso = async (req: Request<{}, {}, Curso>, res: Response)=>{
        try {
            const curso = await this.CursoService.create(req.body);
            if(curso instanceof Error)
                return res.status(400).json({ msg: curso.message });

            return res.status(201).json(curso)
        } catch (error) {
            res.status(500).json({msg: "Erro interno", error})
        }
    }
    public getAll = async (req: Request<{}, {}, Curso[]>, res: Response)=>{
        try {
            const curso = await this.CursoService.findAll();
            if(curso instanceof Error)
                return res.status(400).json({ msg: curso.message });

            return res.status(201).json(curso)
        } catch (error) {
            res.status(500).json({msg: "Erro interno", error})
        }
    }
}