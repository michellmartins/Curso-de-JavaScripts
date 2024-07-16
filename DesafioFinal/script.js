let num = document.querySelector('#txtn')
let lista = document.querySelector('#instab')
let res = document.querySelector('#res')
let valores = []

function insNumero (n) {

    if (Number(n) >= 1 && Number(n) <= 100) {

        return true
    } else {

        return false
    }
}

function insLista (n,l) {

    if(l.lastIndexOf(Number(n)) != -1) {

        return true
    
    }else {

        return false
    } 

}

function analisar() {

    if (insNumero(num.value) && !insLista(num.value,valores)) {

        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = `O valor é ${num.value}`
        lista.appendChild(item)
        res.innerHTML = " "

    }else {

        alert (' Valor indevido ou ja inserido')
    }

    num.value = ' '
    num.focus()
}

function finalizar() {

    total = valores.length
    maior = valores[0]
    menor = valores[0]
    soma = 0
    media = 0 

    if (total == 0) {

        alert(' Favor digitar entre 1 e 100')

    }else {

        for (pos in valores) {

            if (valores[pos] > maior) {

                maior = valores[pos]
            }

            if (valores[pos] < menor) {

                menor = valores[pos]
            }

            soma += valores[pos]
            media = soma /total
        }
        
       
    }

    res.innerHTML = " "
    res.innerHTML = `Os valores digitados foram ${total}`
    res.innerHTML += `<p> O maior valor é ${maior}`
    res.innerHTML += `<p> O menor valor é ${menor}`
    res.innerHTML += `<p> A soma dos valores é ${soma}`
    res.innerHTML += `<p> A media dos valores é ${media}`
    res.innerHTML += `<p> Os valores na ordem são ${valores.join(' - ')}`
    res.innerHTML += `<p> Os valores na ordem crescente são ${valores.sort((a,b) => a-b), valores.join(' - ')}`






}