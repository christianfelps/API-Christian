import { inject, injectable } from "tsyringe";
import { Curso } from "../entities/CursoEntity";
import { CursoRepository } from '../repository/CursoRepository'

@injectable()
export class CursoService {
    constructor( 
        @inject(CursoRepository) 
        private cursoRepository: CursoRepository){}

    public async findAll(): Promise<Curso[] | Error>{
       const cursos = await this.cursoRepository.getAll();
        if(cursos.length === 0) return new Error("Não há cursos registrados");
        return cursos;
    }

    // public async findById(id: number): Promise<Curso | Error>{
    //     try{
    //         const findedCurso = await this.cursoRepository.findOneBy({id: id});
    //         if(!findedCurso){
    //             throw new Error("Curso ID not found");
    //         }
    //         return findedCurso;
    //     }catch(error){
    //         return Error("Curso ID not found");
    //     }
       
    // }

    public async create(Curso: Curso): Promise<Curso | Error>{
        try{
            const newCurso = this.cursoRepository.create(Curso);
            return newCurso;
        }catch(error){
            return Error("Informações erradas");
        }
    }
}