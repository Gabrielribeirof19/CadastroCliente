export class LimparCpf {
    static limpar(cpf: string): string {
    // Verifica se o CPF contém traços ou pontos
    if (RegExp(/[.-]/).exec(cpf)) {
        // Remove os traços e pontos
        return cpf.replace(/[.-]/g, '');
    } else {
        // CPF está sem traços ou pontos, retorna o mesmo CPF
        return cpf;
    }
}
}