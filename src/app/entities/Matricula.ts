import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";
import { Curso } from "./Curso";
import { IsDateString } from "class-validator";
import { Entity } from "typeorm";
@Entity("matriculas")
export class Matricula {
    @PrimaryGeneratedColumn("increment")
    id!: number;
    @ManyToOne(() => Usuario, (usuario) => usuario.matricula)
    usuario!: Usuario;
    @ManyToOne(() => Curso, (curso) => curso.matricula)
    curso!: Curso;
    
    @IsDateString()
    @Column({nullable: false})
    dataMatricula!: Date;

    // public async up(queryRunner: QueryRunner): Promise<void> {
    //     await queryRunner.query(
    //         `CREATE TABLE matriculas (
    //            id int NOT NULL AUTO_INCREMENT,
    //            dataMatricula datetime NOT NULL,
    //            usuario_id int NOT NULL,
    //            curso_id int NULL,
    //            PRIMARY KEY (id)) ENGINE=InnoDB`
    //         );

    //     await queryRunner.query(
    //         `CREATE TABLE usuarios (
    //           id int NOT NULL AUTO_INCREMENT,
    //           nome varchar(255) NOT NULL,
    //           email varchar(255) NOT NULL, 
    //           password varchar(255) NOT NULL, 
    //           dataNascimento date NOT NULL,
    //           PRIMARY KEY (id) ENGINE=InnoDB`);
    
   
    

}