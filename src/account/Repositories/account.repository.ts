import { Injectable } from "@nestjs/common";
import { Repository} from "typeorm"; // Import the missing package
import { Account } from "../Entities/account.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateAccountDto } from "../dto/accountDto";

@Injectable()
export class AccountRepository{

    constructor (
        @InjectRepository(Account)
        private readonly typeOrmRepository: Repository<Account>
        ) {}

    async createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
        return this.typeOrmRepository.save(createAccountDto);
    }
    async getAccount(): Promise<Account[]> {
        return this.typeOrmRepository.find();
    }
    async getAccountByCpf(cpf: string): Promise<Account> {
        return this.typeOrmRepository.findOne({ where: { cpf } });
    }
}