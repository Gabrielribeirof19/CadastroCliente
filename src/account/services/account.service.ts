import { BadRequestException, Injectable, UnprocessableEntityException } from "@nestjs/common";
import { CreateAccountDto } from "../dto/accountDto";
import { CpfValidator } from "../services/validateCpf";
import { Account } from "../../shared/database/typeorm/Entities/account.entity";
import { AccountRepository } from "../Repositories/account.repository";
import { LimparCpf } from "../services/limparCpf";
import { IPaginationOptions, Pagination, paginate } from "nestjs-typeorm-paginate";
import { Repository } from "typeorm";

@Injectable()
export class AccountService{
    constructor (private accountRepository: AccountRepository, private repository: Repository<Account>) {}


    async createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
        const { name, cpf, dateOfBirth } = createAccountDto;
        const cpfValidator = new CpfValidator();
        const cpfIsValid = cpfValidator.validate(cpf);
        if (!cpfIsValid) {
            throw new UnprocessableEntityException('CPF is invalid');
        }
        if (await this.accountRepository.getAccountByCpf(LimparCpf.limpar(cpf))) {
            throw new BadRequestException('CPF already exists');
        }
        const account = await this.accountRepository.createAccount({ name, cpf: LimparCpf.limpar(cpf), dateOfBirth: new Date(dateOfBirth) }); // Remove the unnecessary comma
        return account;
    }
    // async paginateAccount(options: IPaginationOptions): Promise<Pagination<Account>> {
    //     return paginate<Account>(this.repository, options);
    // }
    async getAccountByCpf(cpf: string): Promise<Account> {
        return this.accountRepository.getAccountByCpf(cpf);
    }
}