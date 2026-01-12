import { inject, injectable } from "tsyringe";
import { Curso } from "../entities/CursoEntity";
import { CursoRepository } from '../repository/CursoRepository'

@injectable()
export class CursoService {
    constructor(
        @inject(CursoRepository)
        private cursoRepository: CursoRepository
    ) { }

    public async findAll(): Promise<Curso[]> {
        const cursos = await this.cursoRepository.getAll();
        if (cursos.length === 0) throw new Error("Não há cursos registrados");
        return cursos;
    }

    public async findById(id: number): Promise<Curso> {

        const cursoId = await this.cursoRepository.getId(id);
        if (!cursoId) {
            throw new Error("Não há cursos registrados com esse ID");
        }
        return cursoId;

    }


    public async create(curso: Curso): Promise<Curso> {
        const newCurso = await this.cursoRepository.create(curso);
        if (!newCurso) {
            throw new Error("Erro ao criar curso");
        }
        return newCurso;
    }

    public async update(id: number, curso: Curso): Promise<Curso > {
        const cursoUpdated = await this.cursoRepository.update(id, curso)
        if (!cursoUpdated) {
            throw new Error("Erro ao atualizar curso")
        }
        return cursoUpdated
    }

    public async remove(id: number): Promise<null | Error> {
        const cursoToRemove = this.findById(id);
        if (!cursoToRemove) throw new Error("Curso não encontrada!");
        return await this.cursoRepository.deleteCurso(id)
    }

}