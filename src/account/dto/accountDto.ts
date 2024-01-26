import { IsDate, Length } from "class-validator";
import { Account } from "src/shared/database/typeorm/Entities/account.entity";
export class CreateAccountDto {
    @Length(5, 100)
    name: string;

    @Length(11, 14)
    cpf: string;

    @IsDate()
    dateOfBirth: string;
}

export class ResponseAccountDto {
    name: string;
    cpf: string;
    dateOfBirth: string;
    createdAt: Date;
    updatedAt: Date;
    constructor(account: Account) {
        this.name = account.name;
        this.cpf = account.cpf;
        this.dateOfBirth = account.dateOfBirth;
        this.createdAt = account.createdAt;
        this.updatedAt = account.updatedAt;
    }
}