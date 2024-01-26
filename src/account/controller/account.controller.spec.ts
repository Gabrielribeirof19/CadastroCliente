import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from './account.controller';
import { AccountService } from '../services/account.service';
import { PageService } from '../services/paginate.service';
import { CreateAccountDto } from '../dto/accountDto';
import { PaginationDto } from '../dto/paginationDto';

describe('AccountController', () => {
  let controller: AccountController;
  let accountService: AccountService;
  let paginateService: PageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [
        { provide: AccountService, useValue: { createAccount: jest.fn(), getAccountByCpf: jest.fn() } },
        { provide: PageService, useValue: { getAccounts: jest.fn() } },
      ],
    }).compile();

    controller = module.get<AccountController>(AccountController);
    accountService = module.get<AccountService>(AccountService);
    paginateService = module.get<PageService>(PageService);
  });

  it('should call createAccount on the service with correct parameters', async () => {
    const dto = new CreateAccountDto();
    await controller.createAccount(dto);
    expect(accountService.createAccount).toHaveBeenCalledWith(dto);
  });

  it('should call getAccounts on the service with correct parameters', async () => {
    const dto = new PaginationDto();
    await controller.getAccounts(dto);
    expect(paginateService.getAccounts).toHaveBeenCalledWith(dto);
  });

  it('should call getAccountByCpf on the service with correct parameters', async () => {
    const cpf = '12345678900';
    await controller.listAccountByCpf(cpf);
    expect(accountService.getAccountByCpf).toHaveBeenCalledWith(cpf);
  });
});