let inputNameReference = document.querySelector ('#inputName')
let inputSurnameReference = document.querySelector ('#inputSurname')
let inputTextReference = document.querySelector('#inputText')
let buttonSubmitReference = document.querySelector ('#buttonSubmit')


let pessoa = {}

buttonSubmitReference.addEventListener ('click', function(event){
    event.preventDefault()

    
  
    pessoa.nome = inputNameReference.value
    pessoa.sobrenome = inputSurnameReference.value
    pessoa.maiusculas = inputNameReference.value.toUpperCase()
    pessoa.minusculas = inputSurnameReference.value.toLowerCase()
    pessoa.NomeCompleto = pessoa.nome.concat(" ",pessoa.sobrenome)
    

    console.log(pessoa)
    //trocar "e" por "3" e "a" por "@"
    console.log(pessoa.NomeCompleto.replaceAll(/e/gi,"3"))
    
})




