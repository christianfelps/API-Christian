import { inject, injectable } from "tsyringe";
import { Curso } from "../entities/CursoEntity";
import { CursoRepository } from '../repository/CursoRepository'

@injectable()
export class CursoService {
    constructor( 
        @inject(CursoRepository) 
        private cursoRepository: CursoRepository
    ){}

    public async findAll(): Promise<Curso[] | Error>{
       const cursos = await this.cursoRepository.getAll();
        if(cursos.length === 0) return new Error("Não há cursos registrados");
        return cursos;
    }

   

    public async create(curso: Curso): Promise<Curso | Error>{
       return this.cursoRepository.create(curso)
    }
}