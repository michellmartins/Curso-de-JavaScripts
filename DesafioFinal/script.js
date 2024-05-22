let num = document.querySelector('#txtn')
let tab = document.querySelector('#instab')
let res = document.querySelector('#res')
let valores = []


function insNumero(n) {

    if (Number(n) >= 1 && Number(n) <= 100) {

        return true
    } else {
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
        item.text = ` O valor inserido foi ${num.value}`
        tab.appendChild(item)
        res.innerHTML = ' '
    } else {
        alert('Valor incorreto ou já inserido')
    }

    num.value = ' '
    num.focus()

}


function finalizar() {

    if (valores.length == 0) {

        alert('Favor digitar um numero acima')

    } else {

        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0





        for (let pos in valores) {

            soma = soma + valores[pos]
            media = soma/tot 

            if (valores[pos] > maior) 
                maior = valores[pos]
            
            if (valores[pos] < menor) 
                menor = valores[pos]
            }
      
    



    res.innerHTML = ' '
    res.innerHTML += `<p>Ao todo , temos ${tot} números cadastrados<p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}<p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}<p>`
    res.innerHTML += `<p>A soma de todos os valor é  ${soma}<p>`
    res.innerHTML += `<p>A media dos valores é  ${media}<p>`
        }
}
