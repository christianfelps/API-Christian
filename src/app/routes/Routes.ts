import { Router } from "express";
import {CursoController} from "../controller/CursoController"
import { container } from "tsyringe";
export class Routes {
    public routes: Router;
    private cursoController;

    constructor(){
        this.routes = Router();
        this.cursoController = container.resolve(CursoController);
        this.create();
        this.getAll();
        this.getID();
        this.update();
        this.delete();
        }

/**
 * @swagger
 * /cursos:
 *   post:
 *     summary: Cria um curso
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - descricao
 *               - preco
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Curso de Node
 *               descricao:
 *                 type: string
 *                 example: Curso backend
 *               preco:
 *                 type: number
 *                 example: 99.90
 *     responses:
 *       201:
 *         description: Curso criado
 */
public create() {
  this.routes.post('/', (req, res) =>
    this.cursoController.createCurso(req, res)
  );
}

/**
 * @swagger
 * /cursos:
 *   get:
 *     summary: Lista todos os cursos
 *     responses:
 *       200:
 *         description: Lista de cursos
 */
public getAll() {
  this.routes.get('/', (req, res) =>
    this.cursoController.getAll(req, res)
  );
}   

/**
 * @swagger
 * /cursos/{id}:
 *   get:
 *     summary: Busca curso por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Curso encontrado
 *       404:
 *         description: Curso não encontrado
 */
public getID() {
  this.routes.get('/:id', (req, res) =>
    this.cursoController.getById(req, res)
  );
}

/**
 * @swagger
 * /cursos/{id}:
 *   put:
 *     summary: Atualiza curso
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Curso atualizado
 *               descricao:
 *                 type: string
 *                 example: Nova descrição
 *               preco:
 *                 type: number
 *                 example: 120.50
 *     responses:
 *       200:
 *         description: Curso atualizado
 *       404:
 *         description: Curso não encontrado
 */
public update() {
  this.routes.put('/:id', (req, res) =>
    this.cursoController.update(req, res)
  );
}

/**
 * @swagger
 * /cursos/{id}:
 *   delete:
 *     summary: Deleta curso por ID
 *     parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: integer
 *            example: 1
 *     responses:
 *       204:
 *         description: Curso excluído
 *       404:
 *         description: Curso não encontrado
 */
public delete() {
  this.routes.delete('/:id', (req, res) =>
    this.cursoController.delete(req, res)
  );
}
}