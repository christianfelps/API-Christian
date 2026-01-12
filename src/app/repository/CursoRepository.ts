import { injectable } from "tsyringe";
import { Curso } from "../entities/CursoEntity";
import { DataSource, Repository } from "typeorm";


@injectable()
export class CursoRepository {

   private repositoryCurso: Repository<Curso>;
   
   constructor(private appDataSource: DataSource){
      this.repositoryCurso = this.appDataSource.getRepository(Curso)
   }
   
   public async getAll (): Promise<Curso[]>{
    return await this.repositoryCurso.find()
   }

   public async getId(id: number){
      return await this.repositoryCurso.findOneBy({id})
   }

   public async create (curso: Curso): Promise<Curso>{
         return await this.repositoryCurso.save(
            this.repositoryCurso.create(curso)
         );
        
       
   }

    public async update(id: number, curso: Curso){
         const result = await this.repositoryCurso.update(
         {id},
      {
         nome: curso.nome,
         valor: curso.valor
      })
      return await this.repositoryCurso.findOneBy({id});

   }

   public async deleteCurso(id: number): Promise<void>{
      await this.repositoryCurso.delete(id);
   }





}