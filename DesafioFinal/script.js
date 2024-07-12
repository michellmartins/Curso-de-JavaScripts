let num = document.querySelector('#txtn')
let lista = document.querySelector('#instab')
let res = document.querySelector('#res')
let valores = []

function insNumero(n) {

    if (Number(n) >= 1 && Number(n) <= 100) {

        return true
    
    } else {

        return false
    } 
}

function insLista (n,l) {

    if (l.lastIndexOf(Number(n)) != -1) {

        return true 
    } else {

        return false
    } 

}

function analisar() {

    if (insNumero(num.value) && !insLista(num.value,valores) ) {

        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = `O valor é ${num.value}`
        lista.appendChild(item)
        res.innerHTML = " "
    
    } else {

        alert ('ERRO - Valor ja inserido ou invalido')
    } 

    num.value = " "
    num.focus()
} 

function finalizar () {

    let total = valores.length 
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

 
    if ( total == 0 ) {

        alert ( 'Favor digitar entre 1 e 100')

    }else {

    for ( pos in valores) {

        if ( valores[pos] > maior) {

            maior = valores[pos]
        }
        if (valores[pos] < menor) {

            menor =  valores[pos]
        }

        soma = soma + valores[pos]
        media = soma / total
    }

    }

    res.innerHTML = " "
    res.innerHTML = `O total de numero são ${total}`
    res.innerHTML += `<p> O maior numero é ${maior}`
    res.innerHTML += `<p> O menor numero é ${menor}`
    res.innerHTML += `<p> A soma dos valores é ${soma}`
    res.innerHTML += `<p> A média dos valores é ${media}`
    res.innerHTML += `<p> Os valores digitados na ordem ${valores}`
    res.innerHTML += `<p> Os valores na Ordem crescente ${valores.sort((a,b) => a - b )}`




}
  