let num = document.querySelector('#txtn')
let lista = document.querySelector('#instab')
let res = document.querySelector('#res')
let valores = []


function insNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {

        return true
    }
    else {

        return false

    }


}
function insLista(n, l) {

    if (l.indexOf(Number(n)) != -1) {

        return true
    } else {

        return false
    }

}



function analisar() {

    if (insNumero(num.value) && !insLista(num.value, valores)) {

        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `O valor inserido foi ${num.value}`
        lista.appendChild(item)
        res.innerHTML = " "


    }
    else {

        alert('Erro o Valor Invalido ou Já inserido')

    }

    num.value = " "
    num.focus()
}

function finalizar () {
    
    res.innerHTML += " "
    let total = valores.length 
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    if ( valores.length == 0) {

        alert( " Favor Digitar um numero entre 0 e 100")

    }else {

        for (let pos in valores) {

            if (valores[pos] > maior) {

                maior = valores[pos]
            }
            if (valores[pos] < menor) {

                menor  = valores[pos]
            }

            soma = soma + valores[pos]
            media = soma  / total
            
        }

        
        res.innerHTML += ` <p>Os Números cadastrados foram  ${valores.length}`
        res.innerHTML += `<p> O maior número é ${maior}`
        res.innerHTML += `<p> O menor numero é ${menor}`
        res.innerHTML += `<p> A Soma é ${soma}`
        res.innerHTML += `<p> A média dos valores é ${media}`
        res.innerHTML += `<p> O numeros cadastrados foram ${valores}`
    

    }


}



