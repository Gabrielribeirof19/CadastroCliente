import { Account } from "src/shared/database/typeorm/Entities/account.entity";
import { Repository } from "typeorm";


export class PaginateRepository extends Repository<Account> {
    async findAndCountAll(options: any): Promise<any> {
        const [result, total] = await super.findAndCount(options);
        return { result, total };
    }
}