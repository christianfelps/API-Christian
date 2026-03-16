import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import {Length} from "class-validator"
import { Matricula } from "./Matricula";


@Entity("usuarios")
export class Usuario {

    
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column('varchar', {nullable: false})
    @Length(10, 150)
    nome!: string;

    @Column('varchar', {nullable: false})
    @Length(10, 150)
    email!: string;

    @Column('varchar', {nullable: false})
    @Length(10, 30)
    
    password!: string;

    @Column('varchar', {nullable: false})
    @Length(10, 150)
    dataNascimento!: string;

    @CreateDateColumn()
    created_at!: Date;
    
    @UpdateDateColumn()
    updated_at!: Date;

    @OneToMany(() => Matricula, (matricula) => matricula.usuario)
    matricula!: Matricula[];
    
    
}