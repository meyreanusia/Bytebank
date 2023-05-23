/*
*Ser autenticavel significa ter o metodos autenticar 'senha'. 
 */

export class sistemaAutenticacao{
    static login(altenticavel, senha){
         return altenticavel.autenticar(senha);

    }
}