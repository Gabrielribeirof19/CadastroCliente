import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity(`account`)
export class Account extends Base {
    @Column()
    name: string;
    @Column()
    cpf: string;
    @Column()
    dateOfBirth: Date;
}