import { MigrationInterface, QueryRunner } from "typeorm";

export class RelationTables1773669990660 implements MigrationInterface {
    name = 'RelationTables1773669990660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`matriculas\` (\`id\` int NOT NULL AUTO_INCREMENT, \`dataMatricula\` datetime NOT NULL, \`usuario_id\` int NULL, \`curso_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`usuarios\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nome\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`dataNascimento\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`cursos\` DROP COLUMN \`descricao\``);
        await queryRunner.query(`ALTER TABLE \`cursos\` ADD \`descricao\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cursos\` CHANGE \`created_at\` \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`cursos\` CHANGE \`updated_at\` \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`matriculas\` ADD CONSTRAINT \`FK_40456135e738e0df725760467a7\` FOREIGN KEY (\`usuario_id\`) REFERENCES \`usuarios\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`matriculas\` ADD CONSTRAINT \`FK_acb7060dbc03621818d317fe757\` FOREIGN KEY (\`curso_id\`) REFERENCES \`cursos\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matriculas\` DROP FOREIGN KEY \`FK_acb7060dbc03621818d317fe757\``);
        await queryRunner.query(`ALTER TABLE \`matriculas\` DROP FOREIGN KEY \`FK_40456135e738e0df725760467a7\``);
        await queryRunner.query(`ALTER TABLE \`cursos\` CHANGE \`updated_at\` \`updated_at\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`cursos\` CHANGE \`created_at\` \`created_at\` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`cursos\` DROP COLUMN \`descricao\``);
        await queryRunner.query(`ALTER TABLE \`cursos\` ADD \`descricao\` varchar(150) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`cursos\` DROP COLUMN \`nome\``);
        await queryRunner.query(`ALTER TABLE \`cursos\` ADD \`nome\` varchar(150) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`usuarios\``);
        await queryRunner.query(`DROP TABLE \`matriculas\``);
    }

}
