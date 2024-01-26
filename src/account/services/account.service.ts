import { BadRequestException, Injectable, UnprocessableEntityException } from "@nestjs/common";
import { CreateAccountDto, ResponseAccountDto } from "../dto/accountDto";
import { CpfValidator } from "../services/validateCpf";
import { Account } from "../../shared/database/typeorm/Entities/account.entity";
import { AccountRepository } from "../Repositories/account.repository";
import { LimparCpf } from "../services/limparCpf";


@Injectable()
export class AccountService {
    constructor (private accountRepository: AccountRepository) {}


    async createAccount(createAccountDto: CreateAccountDto): Promise<ResponseAccountDto> {
        const { name, cpf, dateOfBirth } = createAccountDto;
        const cpfValidator = new CpfValidator();
        const cpfIsValid = cpfValidator.validate(cpf);
        if (!cpfIsValid) {
            throw new UnprocessableEntityException('CPF is invalid');
        }
        if (await this.accountRepository.getAccountByCpf(LimparCpf.limpar(cpf))) {
            throw new UnprocessableEntityException('CPF already exists');
        }
        const account = await this.accountRepository.createAccount({ name, cpf: LimparCpf.limpar(cpf), dateOfBirth}); // Remove the unnecessary comma
        return new ResponseAccountDto(account);
    }
  
    async getAccountByCpf(cpf: string): Promise<ResponseAccountDto> {
        const account = await this.accountRepository.getAccountByCpf(cpf);
        if (account == null){
            throw new BadRequestException('Account not found');
        }
        return new ResponseAccountDto(account);
    }
    
}