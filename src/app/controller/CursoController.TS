import { Request, Response } from 'express'
import { CursoService } from '../service/CursoService'
import { Curso } from '../entities/CursoEntity';
import { inject, injectable } from 'tsyringe';
import { IParams } from '../interfaces/Interfaces';
import { StatusCodes } from 'http-status-codes';

@injectable()
export class CursoController {

    constructor(
        @inject(CursoService)
        private CursoService: CursoService
    ) { }

    public createCurso = async (req: Request<{}, {}, Curso>, res: Response) => {
        try {
            const curso = await this.CursoService.create(req.body);
            return res.status(201).json(curso);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Erro interno", error });
        }
    }

    public getAll = async (req: Request<{}, {}, Curso[]>, res: Response) => {
        try {
            const curso = await this.CursoService.findAll();
            if (curso instanceof Error) return res.status(StatusCodes.BAD_REQUEST).json({ msg: curso.message });
            return res.status(StatusCodes.OK).json(curso);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Erro interno", error });
        }
    }

    public getById = async (req: Request<IParams>, res: Response) => {
        try {
            const curso = await this.CursoService.findById(Number(req.params.id));
            if (curso instanceof Error) return res.status(StatusCodes.NOT_FOUND).json({ msg: curso.message });
            return res.status(StatusCodes.OK).json(curso);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Erro interno", error })
        }
    }

    public update = async (req: Request<IParams>, res: Response) => {
        try {
            const curso = await this.CursoService.update(Number(req.params.id), req.body);
            if (curso instanceof Error) return res.status(StatusCodes.NOT_FOUND).json({ msg: curso.message });
            return res.status(StatusCodes.OK).json(curso);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Erro interno", error});
        }

    }
}