import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateAccountDto } from "../dto/accountDto";
import { CpfValidator } from "../services/validateCpf";
import { Account } from "../Entities/account.entity";
import { AccountRepository } from "../Repositories/account.repository";

@Injectable()
export class AccountService{
    constructor (private accountRepository: AccountRepository) {}


    async createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
        const { name, cpf, dateOfBirth } = createAccountDto;
        const cpfValidator = new CpfValidator();
        const cpfIsValid = cpfValidator.validate(cpf);
        if (!cpfIsValid) {
            throw new BadRequestException('CPF is invalid');
        }
        if (await this.accountRepository.getAccountByCpf(cpf)) {
            throw new BadRequestException('CPF already exists');
        }
        const account = await this.accountRepository.createAccount({ name, cpf, dateOfBirth });

        return account;    
    }
    async listAccount(): Promise<Account[]> {
        const listAccount = await this.accountRepository.getAccount();
        if (!listAccount) {
            throw new BadRequestException('No accounts found');
        }
        return listAccount;
    }
}