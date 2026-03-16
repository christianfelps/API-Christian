import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {Length} from "class-validator"
import { Matricula } from "./Matricula";

@Entity("cursos")
export class Curso {

    
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column('varchar', {nullable: false})
    @Length(10, 150)
    nome!: string;

    @Column('varchar', {nullable: false})
    @Length(10, 150)
    descricao!: string;
    
    @Column("decimal", { precision: 10, scale: 2, nullable: false})
    preco!: number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
    

    @OneToMany(() => Matricula, (matricula) => matricula.curso)
    matricula!: Matricula[];
}