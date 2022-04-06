class Cliente {
    constructor(nome, cpf, saldo) {
        this.nome = nome;
        this.cpf = cpf;
        this.saldo = saldo;
    }
    depositar(valor){
        saldo += valor;
    }
}

const rafael = new Cliente();
console.log(rafael)