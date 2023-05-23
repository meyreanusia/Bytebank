import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPolpanca } from "./Conta/ContaPolpanca.js";
import { ContaSalario } from "./Conta/contaSalario.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { sistemaAutenticacao } from "./SistemaAutenticacao.js";



const contaGerente = new Gerente("Meyre França", 1000000 , 10408923458)
contaGerente.cadastrarSenha("124589")

const contaDiretor = new Diretor("Karen Andrade", 2000000, 50246470410)
contaDiretor.cadastrarSenha("03062022");

const cliente = new Cliente("Suelen", 36274824200, '2912');


const gerenteEstaLogado = sistemaAutenticacao.login(contaGerente, "124589");
const diretorEstaLogado = sistemaAutenticacao.login(contaDiretor, "03062022");
const clienteEstaLogado = sistemaAutenticacao.login(cliente, "2912");

// console.log(gerenteEstaLogado);
// console.log(diretorEstaLogado);
console.log(clienteEstaLogado);
console.log(gerenteEstaLogado);