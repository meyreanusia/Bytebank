import { Conta } from "./Conta.js";

export class ContaPolpanca extends Conta{
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
    }
    sacar(valor){
        const taxa = 1.2; 
        this._sacar(valor, taxa);
    }
}