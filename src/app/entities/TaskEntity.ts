import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import {Length} from "class-validator"
@Entity()
export class Task {

    
    @PrimaryGeneratedColumn("increment")
    id!: number;

    @Column('varchar', {nullable: false})
    @Length(10, 1000)
    task!: string
    
    @Column("boolean", {nullable: false})
    done: boolean = false
}