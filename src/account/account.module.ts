import { Module } from "@nestjs/common";
import { AccountController } from "./controller/account.controller";
import { AccountService } from "./services/account.service";
import { AccountRepository } from "./Repositories/account.repository";
import { SharedModule } from "../shared/shared.module";
import { Repository } from "typeorm";
import { Account } from "../shared/database/typeorm/Entities/account.entity";
import { PageService } from "./services/paginate.service";


@Module({
    imports: [SharedModule],
    controllers: [AccountController],
    providers: [AccountService, AccountRepository, Repository<Account>, PageService],
    })
export class AccountModule {}