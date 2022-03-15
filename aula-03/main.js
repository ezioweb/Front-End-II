import somar from './somar.js'
import subtrair from './subtrair.js'
import multiplicar from './multiplicar.js'
import dividir from './dividir.js'

for(let operacao; operacao != '=';){
    let num1 = Numero(prompt('Insira o primeiro numero'))
    operacao = prompt('insira a operacao:\n+\n-\n*\n/')
    let num2 = Numero(prompt('Insira o segundo numero'))
    
    function Numero(numero) {
    
        return parseInt(numero)
    
    }
    
    switch (operacao) {
        case '+':
            console.log(somar(num1, num2))
            break
        case '-':
            console.log(subtrair(num1, num2))
            break
        case '*':
            console.log(multiplicar(num1, num2))
            break
        case '/':
            console.log(dividir(num1, num2))
            break
    }
    }
