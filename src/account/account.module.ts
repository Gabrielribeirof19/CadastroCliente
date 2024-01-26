import { Module } from "@nestjs/common";
import { AccountController } from "./controller/account.controller.spec";
import { AccountService } from "./services/account.service";
import { AccountRepository } from "./Repositories/account.repository";
import { SharedModule } from "src/shared/shared.module";
import { Repository } from "typeorm";
import { Account } from "src/shared/database/typeorm/Entities/account.entity";


@Module({
    imports: [SharedModule],
    controllers: [AccountController],
    providers: [AccountService, AccountRepository, Repository<Account>],
    })
export class AccountModule {}