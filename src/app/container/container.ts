import { container } from "tsyringe";
import { CursoController } from "../controller/CursoController";
container.registerSingleton("CursoController", CursoController)