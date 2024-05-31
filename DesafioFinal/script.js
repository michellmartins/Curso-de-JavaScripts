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

    if (l.indexOf(Number(n)) != -1) {

        return true 
    }else {

        return false
    }
}   



function analisar () {

    if ( insNumero(num.value) && !insLista(num.value,valores)) {

        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text= `O valor inserido foi ${num.value}`
        lista.appendChild(item)
        res.innerHTML = " "

        
}else {

        alert( 'Erro - Valor Invalido ou Já inserido')

}

num.value = " "
num.focus() 

}

function finalizar() { 

    if ( valores.length == 0) {

        alert ('Favor digitar Número entre 1 a 100 ')
   

    }else {

        res.innerHTML = " "
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {

            soma += valores[pos]
            media = soma /total
            if (valores[pos] > maior ) {

                maior = valores[pos]
        }
            if (valores[pos] < menor ) {

                menor = valores[pos]
            }

            
        }

        res.innerHTML += `<p> A quantidade de numeros digitados ${total}`
        res.innerHTML += `<p> O maior valor é ${maior}`
        res.innerHTML += `<p> O Menor valor é ${menor}`
        res.innerHTML += `<p> A Soma ${soma}`
        res.innerHTML += `<p> A média ${media}`
        res.innerHTML += `<p> Os numeros digitados foram ${valores}`


        
    }
}