import { Injectable } from "@nestjs/common";

import { Account } from "../../shared/database/typeorm/Entities/account.entity";
import { CreateAccountDto } from "../dto/accountDto";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AccountRepository{

    constructor(
        @InjectRepository(Account)
        private readonly accountRepository: Repository<Account>,
      ) {}
    async createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
        return this.accountRepository.save(createAccountDto);
    }
    async getAccount(): Promise<Account[]> {
        return this.accountRepository.find();
    }
    async getAccountByCpf(cpf: string): Promise<Account | null> {
        return await this.accountRepository.findOne({ where: { cpf } });
    }
}