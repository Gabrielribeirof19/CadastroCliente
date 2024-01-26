import { LimparCpf } from "./limparCpf";

export class CpfValidator {
    

    validate(cpf: string) {
        let cont = 10;
        let sum = 0;
        let firstDigit = 0;
        let secondDigit = 0;
        let rest = 0;
        cpf = LimparCpf.limpar(cpf);
        if (cpf === '00000000000' || cpf === '11111111111' || cpf === '22222222222' || cpf === '33333333333' || cpf === '44444444444' || cpf === '55555555555' || cpf === '66666666666' || cpf === '77777777777' || cpf === '88888888888' || cpf === '99999999999')
        {
            return false;
        }

        for (let i = 0; i < cpf.length - 2; i++) {
            const currentDigit = parseInt(cpf[i]);
            sum += currentDigit * cont;
            cont--;
        }
        rest = sum % 11;
        if (rest < 2) {
            firstDigit = 0;
        } else {
            firstDigit = 11 - rest;
        }
        cont = 11;
        sum = 0;
        rest = 0;
        for (let i = 0; i < cpf.length - 1; i++) {
            const currentDigit = parseInt(cpf[i]);
            sum += currentDigit * cont;
            cont--;
        }
        rest = sum % 11;
        if (rest < 2) {
            secondDigit = 0;
        } else {
            secondDigit = 11 - rest;
        }
        if (firstDigit === parseInt(cpf[9]) && secondDigit === parseInt(cpf[10])) {
            return true;
        } else {
            return false;
        }
    }
  
}