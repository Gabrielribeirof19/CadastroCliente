import { Module } from "@nestjs/common";
import { AccountController } from "./controller/account.controller";
import { AccountService } from "./services/account.service";
import { AccountRepository } from "./Repositories/account.repository";
import { SharedModule } from "src/shared/shared.module";
import { Repository } from "typeorm";
import { Account } from "src/shared/database/typeorm/Entities/account.entity";

import { PaginateRepository } from "./Repositories/paginateRepository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PageService } from "./services/paginate.service";


@Module({
    imports: [SharedModule],
    controllers: [AccountController],
    providers: [AccountService, AccountRepository, Repository<Account>, PageService],
    })
export class AccountModule {}