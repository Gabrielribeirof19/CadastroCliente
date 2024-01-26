import { CpfValidator } from './validateCpf';

describe('CpfValidator', () => {
  let cpfValidator: CpfValidator;

  beforeEach(() => {
    cpfValidator = new CpfValidator();
  });

  it('should return true if CPF is valid', () => {
    const cpf = '836.778.400-66'; // replace with a valid CPF
    expect(cpfValidator.validate(cpf)).toBe(true);
  });

  it('should return false if CPF is invalid', () => {
    const cpf = 'invalid_cpf'; // replace with an invalid CPF
    expect(cpfValidator.validate(cpf)).toBe(false);
  });
  it('should return false if CPF is invalid', () => {
    const cpf = '111.111.111-11'; // replace with an invalid CPF
    expect(cpfValidator.validate(cpf)).toBe(false);
  });
});