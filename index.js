const prompt  = require('prompt-sync');
const entrada = prompt();
const nomeCompleto = "Carlos Magno Pereira";
const anoNascimento = 2006;
let anoAtual = 2024;
const idade = 18; 
const A = "a";
const E = "e";
const O = "o";
const Os = "os";
const Para = "para";
const Nao = "não";

console.log("Olá eu sou " + nomeCompleto + ", estamos no ano " + anoAtual + " e nasci no ano  " + anoNascimento + " " + E + " pretendo estar no exército, usarei " + Os + " benefícios que " + O + " exército possui para chegar aonde realmente quero. Pretendo começar tudo isso no ano de");

anoAtual = anoAtual + 1;
console.log(anoAtual);

console.log(`crase ${nomeCompleto}, estamos no ano ${anoAtual} e nasci no ano ${anoNascimento} ${E} tamo ae cara, tenho ${idade} `);

const loginCerto = "cmp";
const senhaCerta = 2143
console.log("                                     -------------------");
console.log("                                     AGENCIA DE VIAGENS");
console.log("                                     -------------------");

var nomeComprador = entrada("Qual seu nome?: ")
var idadeComprador = entrada("Qual sua idade?:  "); 

if(idadeComprador <= 18){

  console.log(`ola, ${nomeComprador} voce não possuie a idade minima para fazer essa compra. `)
}

var login = entrada("fassa teu login: ");
var senha = entrada("senha: ");
while(login != loginCerto){
  console.log("login errado");
  login = entrada("tente novamente amigo: ");  
}
while(senha != senhaCerta){
  console.log("senha errada, tente novamente");
  senha = entrada("tente novamente:   ")
}

console.log(`Essas são as nossas opções para levar a sogra de ferias!`);

const ListaDeLocais = new Array(
  `Negrozaque`,
  ` Niggeria`,
  ` IceLand Que Nao Tem Ice`,
  ` GreemLand Que Nao Tem Greem`,
  ` Italiland`
  );

console.log(ListaDeLocais);



if (idadeComprador >= 18){
}