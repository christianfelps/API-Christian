import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCursosTable1767225600000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE cursos (
                id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
                nome VARCHAR(150) NOT NULL,
                descricao VARCHAR(150) NOT NULL,
                preco DECIMAL(10,2) NOT NULL,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
   
            );
`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE cursos
        `)
    }

}
