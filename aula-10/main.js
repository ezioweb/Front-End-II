let inputNomeReferencia = document.querySelector ('#inputNome')
let inputTermosReferencia = document.querySelector ('#inputTermos')
let inputbotaoConcluirCadastroReferencia = document.querySelector ('#botaoConcluirCadastro')
//para pegar uma opção pelo nome(atributo "name" da tag input), quando tem uma escolha
let inputsTipoPessoaReferencia= document.getElementsByName('tipoPessoa')

let selectCidadeReferencia = document.querySelector('#selectCidade')

//objeto com os dados
let usuario = {}

botaoConcluirCadastro.addEventListener('click', function(event){
    
    event.preventDefault()

    //para colocar uma propriedade num objeto vazio:
    usuario.nome = inputNomeReferencia.value.trim() //o trim tira os espaços em branco antes e depois
    
    //em caso de check box usa o checked no lugar do value:
    usuario.aceitouTermos = inputTermosReferencia.checked
    
    

    //quando tem que escolher uma opção, saber qual opção está checada cria um loop, no caso, de array (for of)
    for(inputTipoPessoa of inputsTipoPessoaReferencia){

        if(inputTipoPessoa.checked){

            usuario.tipoPessoa = inputTipoPessoa.value
        }
        
    }
    usuario.cidade = selectCidadeReferencia.value
    console.log (usuario)
}) 