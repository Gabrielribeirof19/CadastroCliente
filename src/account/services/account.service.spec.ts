import { Test, TestingModule } from '@nestjs/testing';
import { AccountService } from './account.service';
import { AccountRepository } from '../Repositories/account.repository';
import { CreateAccountDto } from '../dto/accountDto';
import { UnprocessableEntityException, BadRequestException } from '@nestjs/common';
import { Account } from '../../shared/database/typeorm/Entities/account.entity';
import { ResponseAccountDto } from '../dto/accountDto';

describe('AccountService', () => {
  let service: AccountService;
  let accountRepository: jest.Mocked<AccountRepository>;

  beforeEach(async () => {
    const repoMock = {
      getAccountByCpf: jest.fn(),
      createAccount: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccountService,
        { provide: AccountRepository, useValue: repoMock },
      ],
    }).compile();

    service = module.get<AccountService>(AccountService);
    accountRepository = module.get(AccountRepository);
  });

  it('should throw an error if CPF is invalid when creating an account', async () => {
    const dto = new CreateAccountDto();
    dto.cpf = 'invalid_cpf';
    await expect(service.createAccount(dto)).rejects.toThrow(UnprocessableEntityException);
  });

  it('should throw an error if CPF already exists when creating an account', async () => {
    const dto = new CreateAccountDto();
    dto.cpf = '836.778.400-66';
    dto.name = 'Test Name';
    dto.dateOfBirth = '1990-01-01';
    const account = new Account();
    accountRepository.createAccount.mockResolvedValueOnce(account);
    accountRepository.getAccountByCpf.mockResolvedValueOnce(account);
    await expect(service.createAccount(dto)).rejects.toThrow(UnprocessableEntityException);
  });

  it('should create an account if CPF is valid and does not exist', async () => {
    const dto = new CreateAccountDto();
    dto.cpf = '836.778.400-66';
    const account = new Account();
    accountRepository.getAccountByCpf.mockResolvedValueOnce(null);
    accountRepository.createAccount.mockResolvedValueOnce(account);
    await expect(service.createAccount(dto)).resolves.toEqual(account);
  });

  it('should throw an error if account not found by CPF', async () => {
    const cpf = '12345678900';
    accountRepository.getAccountByCpf.mockResolvedValueOnce(null);
    await expect(service.getAccountByCpf(cpf)).rejects.toThrow(BadRequestException);
  });

  it('should return an account if found by CPF', async () => {
    const cpf = '12345678900';
    const account = new Account();
    accountRepository.getAccountByCpf.mockResolvedValueOnce(account);
    await expect(service.getAccountByCpf(cpf)).resolves.toEqual(new ResponseAccountDto(account));
  });
});