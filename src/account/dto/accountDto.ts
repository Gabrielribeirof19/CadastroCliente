import { IsDate, Length } from "class-validator";
export class CreateAccountDto {
    @Length(5, 100)
    name: string;

    @Length(11)
    cpf: string;

    @IsDate()
    dateOfBirth: Date;
}