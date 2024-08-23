let num = document.querySelector('#txtn')
let res = document.querySelector('#res')
let lista = document.querySelector('#instab')
let valores = []

function insNumero(n) {

    if (Number(n) >= 1 && Number(n) <= 100) {

        return true
    } else {

        return false
    }
}

function insLista (n,l) {

    if (l.indexOf(Number(n)) != -1) {

        return true
    } else {

        return false 
    }
}

function analisar() {

    if (insNumero(num.value) && !insLista(num.value, valores)) {

        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = ` O valor é ${num.value}`
        lista.appendChild(item)
        res.innerHTML = ' '


    } else {

        alert(' Valor já inserido ou Invalido')

    }

    num.value = " "
    num.focus()

}

function finalizar () {

    total = valores.length
    maior = valores[0]
    menor = valores[0]
    soma = 0
    media = 0

    if ( total === 0) {

        alert (' Favor digitar entre os valores 1 a 100')
    }

    for ( pos in valores ) {

        if ( valores[pos] > maior ) {

            maior = valores[pos]
        }

        if (valores[pos] < menor) {

            menor = valores[pos]
        }

        soma += valores[pos]
        media = soma / total
    }
        res.innerHTML = ' '
        res.innerHTML += `O total de valores digitados foram ${total}`
        res.innerHTML += `<p> O maior valor é ${maior}`
        res.innerHTML += `<p> O menor valor é ${menor}`
        res.innerHTML += `<p> A soma dos valores é ${soma}`
        res.innerHTML += `<p> A media dos valores é ${media}`
        res.innerHTML += `<p> Os valores digitados na ordem foram ${valores.join(' - ')}`
        res.innerHTML += `<p> Os valores digirados na ordem crescente ${valores.sort((a,b) => a - b ).join(' * ')}`






        
}