/* const numbers = [1, 3, 5, 8, 12, 42, 96, 1024]
var soma = 0;
for(var i = 0; i < numbers.length; i++) {
    soma += numbers[i];
    console.log(soma)
} */
/* alert("Stoop") */

/* let resultado = confirm("Deseja realmente continuar?");
console.log(resultado); */

//let nome = prompt("Qual seu nome? ");

//document.querySelector('h1').innerText += ' '+nome;

/* let numeros = [1, 3, 5, 8, 12, 42, 96, 1024];

let soma = numeros.map(function(numero) {
  return numero + numero;
});

console.log(soma);  
 */

// FOR OF

/* const numbers = [10, 22, 3, 4, 51, 6]

console.log(numbers)
for(let number of numbers) {
  console.log(number)
} */

/* const user = {
  name: 'Ezio', 
  age: 48,
  birthDate: '22/05/1973'
 }

for(let userDetail in user){
 //console.log(userDetail)
 console.log(userDetail + ": " + user[userDetail])
} */

/* 
sem nada: nome do dados 
com []: dados 
*/

// For of = array
// For in = objeto

/* const lista = {
  frutas: 'banana, maça e laranja',
  bebidas: 'gim e vodka',
  drinks: 'gin tônia e capipiroska'
}

for(let Itens in lista){
  console.log(Itens + ": " + lista[Itens])
}
 */
//let userChoide = prompt('1- Pedra, 2- Papel, 3- Tesoura')

/* let carro = {
  nome: 'gol',
  ano: '2020'
}

for(let propriedade in carro){
  console.log(propriedade + ": " + carro[propriedade])
} */

let  frutas=  ['banana', 'maça', 'laranja', 'abacaxi']

for(let fruta of frutas){
  console.log(fruta)
}