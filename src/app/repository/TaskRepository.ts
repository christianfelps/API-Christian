import { AppDataSource } from "../database/dataSource";
import { Task } from "../entities/TaskEntity";

export interface TaskRepository extends AppDataSource{
    findAll(): Promise<Task[]>;
    findById(id: number): Promise<Task>
    create(task: Task): Promise<number | Error>
    update(task: Task, id: number): Promise<>

}