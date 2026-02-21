import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {Length} from "class-validator"

@Entity("cursos")
export class CursoEntity {

    
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column('varchar', {nullable: false})
    @Length(10, 150)
    nome!: string;

    @Column('varchar', {nullable: false})
    @Length(10, 150)
    descricao!: string;
    
    @Column("decimal", { precision: 10, scale: 2 })
    preco!: number;
}