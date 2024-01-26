import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity()
export class Account extends Base {
    @Column()
    name: string;
    @Column({ length: 11 })
    cpf: string;
    @Column()
    dateOfBirth: string;
}