import { Entity } from "typeorm";

@Entity()
export class Account {
    id: number;
    name: string;
    cpf: string;
    dateOfBirth: Date;
}