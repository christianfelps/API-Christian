import { Curso } from "../entities/CursoEntity";
import { autoInjectable } from "tsyringe";
import { DataSource, Repository } from "typeorm";

export class CursoRepository {

   private appDataSource: DataSource

   private repositoryCurso: Repository<Curso>;
   
constructor(appDataSource: DataSource){
   this.appDataSource = appDataSource,
   this.repositoryCurso = this.appDataSource.getRepository(Curso)
}
   
   public getAll (): Promise<Curso[]>{
    return this.repositoryCurso.find()
   }

   public async create (curso: Curso): Promise<Curso | Error >{
     try{
       const newCurso = await this.repositoryCurso.create(curso);
       if(!newCurso){
        throw new Error('erro ao cadastro novo curso')
        
       }
       return newCurso;
       }catch(error){
         console.error(error)
          throw error
       }
   }

}