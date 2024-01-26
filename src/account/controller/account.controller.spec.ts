import { Body, Controller, Get, Post } from "@nestjs/common";
import { AccountService } from "../services/account.service";
import { CreateAccountDto } from "../dto/accountDto";
import { Account } from "../../shared/database/typeorm/Entities/account.entity";

@Controller()

export class AccountController {
    constructor(private accountService: AccountService, ) {}

    @Post("createAccount")
    async createAccount(@Body() createAccountDto: CreateAccountDto): Promise<void>{
         this.accountService.createAccount(createAccountDto);
    }
    // @Get("listAccount")
    // async listAccount(): Promise<Account[]>{
    //     return this.accountService.listAccount();
    // }
}