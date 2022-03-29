let botaoLoginreferencia = document.querySelector('#botaoLogin')
let controladoresReferencia = document.querySelectorAll('.controlador')


for(let controladorReferencia of controladoresReferencia) {

    let inputRefencia = controladorReferencia.children[1]

    inputRefencia.addEventListener('keyup', function(event) {
    
        if(inputRefencia.checkValidity()){
    
            controladorReferencia.classList.remove('erro')
            botaoLoginreferencia.disabled = false
    
        } else {
            
            controladorReferencia.classList.add('erro')
            botaoLoginreferencia.disabled = true
        }
    
    })

}


botaoLoginreferencia.addEventListener('click', function(event){
    event.preventDefault()
    console.log(event)
})

