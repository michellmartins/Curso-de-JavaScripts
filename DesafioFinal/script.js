let num = document.querySelector('#txtn')
let res = document.querySelector('#res')
let lista = document.querySelector('#instab')
let valores = []

function insNumero (n) {

    if (Number(n) >= 1 && Number(n) <= 100) {

        return true 
    
    }else {

        return false
    }
}

function insLista(n,l) {

    if (l.indexOf(Number(n)) != -1) {

        return true
    
    } else {

        return false
    }

}


function analisar () {

    if( insNumero(num.value) && !insLista(num.value,valores)) {

        valores.push(Number(num.value))
        item = document.createElement('option')
        item.text = `O valor é ${num.value}`
        lista.appendChild(item)
        res.innerHTML = ' '



    }else {

        alert(('Valor já inserido ou Inválido'))

    }

    num.value = ' '
    num.focus() 
}

function finalizar () {

    total = valores.length 
    maior = valores[0]
    menor = valores[0]
    soma = 0 
    media = 0


    if ( total === 0 ) {

        alert (' Favor digitar entre o valor 1 a 100') 

    }else {

        for(pos in valores) {

            if ( valores[pos] > maior) {

                maior = valores[pos]
            }

            if (valores[pos] < menor) {

                menor = valores[pos] 
            }
            
            soma += valores[pos]
            media = soma /total
         }

         res.innerHTML += ' '
         res.innerHTML += `Os valores digitados foram no total de ${total} números`
         res.innerHTML += `<p> O maior valor é ${maior}`
         res.innerHTML += `<p> o menor valor é ${menor}`
         res.innerHTML += `<p> A soma dos valores ${soma}`
         res.innerHTML += `<p> A media dos valores ${media}`
         res.innerHTML += `<p> Os valores digitados na ordem foram ${valores.join(' _')} `
         res.innerHTML += `<p> Os valores digitados na ordem crescente foram ${valores.sort((a,b) => a -b ).join(' - ')}`






    }
}


