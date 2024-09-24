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

const ListaDeLocais = new Array(
  `Negrozaque`,
  ` Niggeria`,
  ` IceLandQueNaoTemIce`,
  ` GreemLandQueNaoTemGreem`,
  ` Italiland`
  );

console.log(ListaDeLocais);

console.log(ListaDeLocais[4]);
ListaDeLocais. push("Coronel Desvivido");
console.log(ListaDeLocais);

ListaDeLocais.splice(1,2);
console.log(ListaDeLocais);

var nomeComprador = entrada("Qual nome esta escrito em teu RG? ")
var idadeComprador = entrada("Qual sua idade?  "); 

if(idadeComprador <= 18){
  
  console.log(`ola, ${nomeComprador} sua voce não possuia a idade minima ;para fazer essa compra. Apenas ${idadeComprador} anos de idade? patetico`)
}
if (idadeComprador >= 18){
  console.log(`senhor(a) ${nomeComprador} seu dinheiro foi enviado com segunrança para o nosso bolso, agradeço sua compra`);

 console.log(`Essas são nossa lista de locais para voce levar a sogra
 
 ${ListaDeLocais}`)
}