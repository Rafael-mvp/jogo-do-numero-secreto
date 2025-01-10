// let titulo = document.querySelector('h1')
// titulo.innerHTML ='jogo do numero secreto'

let limite = 10

let listaDeNumerosSorteados = []
let paragrafo = document.querySelector('p')
 paragrafo.innerHTML = 'escolha um número entre 1 a 10'

 let numeroSecreto = gerarNumeroAleatorio()
 let tentativas = 1
 let nomeTentativas = ''


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML= texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

exibirTextoNaTela('h1', 'jogo do numero secreto')
exibirTextoNaTela('p','escolha um numero entre 1 a 10')


function verificarChute() {
    div__resultado.innerHTML=``
    let valorDoNumero = document.querySelector('input').value
    
    
    if(tentativas == 1) {
        nomeTentativas = 'tentativa'
    } else {
        nomeTentativas = 'tentativas'
    }

    if(valorDoNumero == numeroSecreto) {
        div__resultado.innerHTML=`você acertou, com ${tentativas} ${nomeTentativas}, parabens!`
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if(valorDoNumero > numeroSecreto) {
            div__resultado.innerHTML=`tente um numero menor`
        } else if (valorDoNumero < numeroSecreto) {
            div__resultado.innerHTML=`tente um numero maior`
        }
        tentativas += 1
        limparCampo()
    }

}

function gerarNumeroAleatorio(){
  let numeroEscolhido =  Number(parseInt(Math.random() * limite + 1))
  let quantidadeDeElementosLista = listaDeNumerosSorteados.length

  if(quantidadeDeElementosLista == limite) {
    listaDeNumerosSorteados = []
  }

  if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio()
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido)
    console.log(listaDeNumerosSorteados)
    return numeroEscolhido
  }

}

function limparCampo(){
   valorDoNumero = document.querySelector('input')
   valorDoNumero.value = ''
}


function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    div__resultado.innerHTML=``
    document.getElementById('reiniciar').setAttribute('disabled',true)
}




