let num = document.querySelector('#txtn')
let lista = document.querySelector("#instab")
let res= document.querySelector('#res')
let valores =[ ]

function insNumero(n) {

    if (Number(n) >= 1 && Number(n) <= 100) {

        return true
    }else {

        return false
    }
 }

 function insLista (n,l) {

    if (l.indexOf(Number(n)) != -1 ) {

        return true 
    }else {

        return false 
    }
 }

function analisar() {

    if ( insNumero(num.value) && !insLista(num.value,valores)) {

        valores.push(Number(num.value)) 

        let item = document.createElement('option')
        item.text = `O valor inserido foi ${num.value}`
        lista.appendChild(item)
        res.innerHTML = " "


    } else {

        alert ('Valor Invalido ou Valor já inserido')
    }

num.value = " "
num.focus()

}

function finalizar () { 

    if (valores.length == 0) {

        alert (' Favor digitar entre 1 a 100')
    
    } else {

        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0

        for ( var pos in valores ) {

            if (valores[pos] > maior) {

                maior = valores[pos]
            }

            if (valores[pos] < menor) {

                menor = valores[pos]
            }

          soma = soma + valores[pos]
          media = soma / total

        }



        res.innerHTML = " "
        res.innerHTML += `<p>Foram digitados ${total} números`
        res.innerHTML += `<p> O Maior numero é ${maior}`
        res.innerHTML += `<p> O Menor numero é ${menor}`
        res.innerHTML += `<p> A soma dos valores é ${soma}`
        res.innerHTML += `<p> A média dos valores é ${media}`
        res.innerHTML += `<p> Os valores digitados foram ${valores}`
        







    }


}