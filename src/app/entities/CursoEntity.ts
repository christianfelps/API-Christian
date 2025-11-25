import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {Length} from "class-validator"
@Entity("cursos")
export class Curso {

    
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column('varchar', {nullable: false})
    @Length(10, 30)
    nome!: string;
    
    @Column("decimal", { precision: 10, scale: 2 })
    valor!: number;
}