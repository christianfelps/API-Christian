import { DataSource } from "typeorm";


export const appDataSource = new DataSource({
            type: "mysql",
            host: "localhost",
            port: 3306,
            database: "api",
            username: "root",
            password: "root",
            synchronize: false,
            logging: false,
            entities: ["src/app/entities/*.ts"],
            migrations: ["src/app/database/migration/*.ts"],
        });
        
    
