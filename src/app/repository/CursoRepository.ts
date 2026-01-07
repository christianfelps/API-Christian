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

   public async create (curso: Curso): Promise<Curso | Error >{
     try{
         const newCurso = this.repositoryCurso.create(curso);
         const saveCurso = await this.repositoryCurso.save(newCurso);
         return saveCurso;
       }catch(error) {
            console.error(error);
            return new Error("Erro ao salvar o curso");
       }
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





}