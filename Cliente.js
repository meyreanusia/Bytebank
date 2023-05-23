export class Cliente{
    get cpf(){
        return this._cpf; 
    }

    // Na hora que estiver criando a classe, atribui os valores passados
    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }
    autenticar(){
        return true
    }
}
