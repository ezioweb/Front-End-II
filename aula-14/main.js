let inputCepRef = document.querySelector('#inputCep')
let inputRuaRef = document.querySelector('#inputRua')
let botaoSubmitRef = document.querySelector('button')
let respostaRef = document.querySelector('b')

botaoSubmitRef.addEventListener('click', event =>{
    event.preventDefault()
    

    fetch(`https://viacep.com.br/ws/${inputCepRef.value}/json/`)
    .then(
        response => {
            console.log(response)
            response.json().then(
                data =>{
                    inputRuaRef.value = data.logradouro
                    respostaRef.innerHTML = data.localidade
                    console.log(data)
                }
            )
    })
})



