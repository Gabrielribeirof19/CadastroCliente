import { Body, Controller, Get, Post, Query} from "@nestjs/common";
import { AccountService } from "../services/account.service";
import { CreateAccountDto, ResponseAccountDto } from "../dto/accountDto";
import { PageService } from "../services/paginate.service";
import { PaginationDto } from "../dto/paginationDto";
import { Account } from "src/shared/database/typeorm/Entities/account.entity";


@Controller()

export class AccountController {
    constructor(private accountService: AccountService, private paginateService: PageService) {}

    

    @Post("createAccount")
    async createAccount(@Body() createAccountDto: CreateAccountDto): Promise<ResponseAccountDto>{
        return this.accountService.createAccount(createAccountDto);
    }
    
    @Get()
    async getAccounts(@Query() paginationDto: PaginationDto) {
        return this.paginateService.getAccounts(paginationDto);
    }

    @Get("listAccountByCpf")
    async listAccountByCpf(@Query('cpf') cpf: string): Promise<ResponseAccountDto>{
        return this.accountService.getAccountByCpf(cpf);
    }
}