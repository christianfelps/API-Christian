import { DataSource } from 'typeorm'
import { Curso } from '../entities/CursoEntity'
import { injectable } from 'tsyringe';
@injectable()
export class  AppDataSource {
    public appDataSource: DataSource;

    constructor(){
        this.appDataSource = new DataSource({
            type: "mysql",
            host: "localhost",
            port: 3306,
            database: "api",
            username: "root",
            password: "1408",
            entities: [Curso]
        })
        
    
    }
    public iniciar  = async (): Promise<void | Error> => {
        try{
            await this.appDataSource.initialize();
            console.log("Banco conectado")
        }catch(error) {
            console.error("Erro ao conectar: ", error);
            throw error;
        }
      
    }

}