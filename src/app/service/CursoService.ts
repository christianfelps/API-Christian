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

    public async findById(id: number):Promise<Curso | Error>{

        const cursoId = await this.cursoRepository.getId(id);
        if(!cursoId){
            return new Error("Não há cursos registrados com esse ID"); 
        }
        return cursoId

    }
   

    public async create(curso: Curso): Promise<Curso | Error>{
       return this.cursoRepository.create(curso)
    }
}