import { Body, Controller, DefaultValuePipe, Get, Param, Post, Query } from "@nestjs/common";
import { AccountService } from "../services/account.service";
import { CreateAccountDto } from "../dto/accountDto";
import { Account } from "../../shared/database/typeorm/Entities/account.entity";
import { Pagination } from "nestjs-typeorm-paginate";

@Controller('accounts')
export class AccountController {
    constructor(private accountService: AccountService ) {}

    // @Get("listAccount")
    // async listAccount(@Query('page', new DefaultValuePipe(1),) page: number = 1,
    // @Query('limit', new DefaultValuePipe(10),) limit: number = 10,): Promise<Pagination<Account>>{
    //     limit = limit > 100 ? 100 : limit;
    //     return this.accountService.paginateAccount({
    //         page,
    //         limit,
    //         route: 'http://localhost:3000/listAccount',
    //         });
    // }

    @Post("createAccount")
    async createAccount(@Body() createAccountDto: CreateAccountDto): Promise<Account>{
        return this.accountService.createAccount(createAccountDto);
    }
    
    @Get("listAccountByCpf/:cpf")
    async listAccountByCpf(@Param('cpf') cpf: string): Promise<Account>{
        return this.accountService.getAccountByCpf(cpf);
    }
}