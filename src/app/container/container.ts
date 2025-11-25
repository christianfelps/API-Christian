import { container } from "tsyringe";
import { CursoController } from "../controller/CursoController";
import { appDataSource } from "../database/dataSource";
import { CursoRepository } from "../repository/CursoRepository";
import { CursoService } from "../service/CursoService";
import { DataSource } from "typeorm";

container.registerInstance(DataSource, appDataSource);

container.registerSingleton(CursoRepository);
container.registerSingleton(CursoService);
container.registerSingleton(CursoController);