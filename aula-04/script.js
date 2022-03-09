console.dir(document)

console.log('getElementsByTagName', document.getElementsByTagName('h1'))

console.log('getElementsByClassName', document.getElementsByClassName('teste'))

console.log('getElementById', document.getElementById ('tituloPrincipal'))

//querySelectorAll traz todos os resultados
//querySelector traz o 1o resultado


console.log(document.querySelector('h1')) //quando é elemento não precisa colocar nada antes

console.log(document.querySelector('#tituloPrincipal')) //para id coloca o # (hashtag)

console.log(document.querySelector('.teste')) //para class coloca o .(ponto)

var tituloPrincipal = document.querySelector('#tituloPrincipal')
tituloPrincipal.style.color = 'red'