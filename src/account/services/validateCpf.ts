export class CpfValidator {
    validate(cpf: string) {
        let cont = 10;
        let sum = 0;
        let firstDigit = 0;
        let secondDigit = 0;
        let rest = 0;
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