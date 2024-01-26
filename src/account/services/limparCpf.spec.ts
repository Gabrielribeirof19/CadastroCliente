import { LimparCpf } from './limparCpf';

describe('LimparCpf', () => {
  it('should remove non-numeric characters from CPF', () => {
    const cpf = '123.456.789-00';
    const expectedCpf = '12345678900';
    expect(LimparCpf.limpar(cpf)).toEqual(expectedCpf);
  });

  it('should return the same CPF if it contains only numeric characters', () => {
    const cpf = '12345678900';
    expect(LimparCpf.limpar(cpf)).toEqual(cpf);
  });
});