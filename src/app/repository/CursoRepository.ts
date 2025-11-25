import { injectable } from "tsyringe";
import { Curso } from "../entities/CursoEntity";
import { DataSource, Repository } from "typeorm";

@injectable()
export class CursoRepository {

   private repositoryCurso: Repository<Curso>;
   
   constructor(private appDataSource: DataSource){
      this.repositoryCurso = this.appDataSource.getRepository(Curso)
   }
   
   public getAll (): Promise<Curso[]>{
    return this.repositoryCurso.find()
   }

   public async create (curso: Curso): Promise<Curso | Error >{
     try{
       const newCurso = this.repositoryCurso.create(curso);
       const saveCurso = await this.repositoryCurso.save(newCurso)
       

       return saveCurso;
       } catch(error) {
         console.error(error)
         return new Error("Erro ao salvar o curso")
       }
   }

}