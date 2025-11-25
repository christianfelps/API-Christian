import { DataSource } from "typeorm";
import { Curso } from "../entities/CursoEntity";

export const appDataSource = new DataSource({
            type: "mysql",
            host: "localhost",
            port: 3306,
            database: "api",
            username: "root",
            password: "1408",
            entities: [Curso]
        });
        
    
