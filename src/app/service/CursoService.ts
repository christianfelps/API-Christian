import { inject, injectable } from "tsyringe";
import { CursoEntity as Curso } from "../entities/CursoEntity";
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
        const cursoUpdated = await this.cursoRepository.getId(id);
        if (!cursoUpdated) throw new Error("Erro ao atualizar curso")
        Object.assign(cursoUpdated, curso);
        await this.cursoRepository.create(cursoUpdated);
        return cursoUpdated;
    }

   public async remove(id: number): Promise<void> {
    const cursoToRemove = await this.findById(id);
    await this.cursoRepository.deleteCurso(cursoToRemove.id);
}

}