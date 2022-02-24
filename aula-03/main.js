import somar from './somar.js'

let primeiroNumero = converterNumero (prompt('Insira o primeiro número'))
let segundoNumero = converterNumero (prompt('Insira o segundo número'))

function converterNumero(numero) {
    return parseInt(numero)
}


console.log(somar(primeiroNumero, segundoNumero))

