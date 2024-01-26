import { Repository } from "typeorm";
import { PaginationDto } from "../dto/paginationDto";

import { Account } from "../../shared/database/typeorm/Entities/account.entity";
import { InjectRepository } from "@nestjs/typeorm";

export class PageService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
) {}

async getAccounts(paginationDto: PaginationDto) {
  const { skip, take, order } = paginationDto;
  return this.accountRepository.createQueryBuilder('account')
      .orderBy('account.createdAt', order)
      .skip(skip)
      .take(take)
      .getMany();
}
}