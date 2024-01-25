import { Module } from "@nestjs/common";
import { AccountController } from "./controller/account.controller.spec";
import { AccountService } from "./services/account.service";
import { AccountRepository } from "./Repositories/account.repository";

@Module({
    imports: [],
    controllers: [AccountController],
    providers: [AccountService, AccountRepository],
    })
export class AppModule {}