 let num = document.querySelector("#txtn")
 let lista = document.querySelector('#instab')
 let res = document.querySelector('#res')
 let valores = []


function insNumero(n) {

    if (Number(n) >= 1 && Number(n) <= 100) {

        return true 

    }else {

        return false
    }
    }

function insLista(n,l) {

    if (l.indexOf(Number(n)) != -1 ) {

        return true 

    }else {

        return false
    }
}


function analisar () { 

    if ( insNumero(num.value) && !insLista(num.value,valores)) {

        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = (`${num.value} valor inserido`)
        lista.appendChild(item)
        res.innerHTML = " "
    
    }else {

        alert ('Valor Invalido ou Já inserido')
    }

    num.value = ''
    num.focus()

}

function finalizar () {

    if ( valores.length == 0 ) {

        alert ( 'Favor digitar numeros de 1 a 100')

}else {

    let total = valores.length
    maior = valores[0]
    menor = valores[0]
    soma = 0
    media = 0

    for ( let pos in valores) {
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
    res.innerHTML += (`<p>Total de ${total} numeros digitados`)
    res.innerHTML += (`<p> O maior valor é ${maior}`)
    res.innerHTML += (`<p> O menor valor é ${menor}`)
    res.innerHTML += (`<p> A soma dos valores é ${soma}`)
    res.innerHTML += (`<p> A média dos valores é ${media}`)
    res.innerHTML += (`<p> Os numero computados foram ${valores}`)
    res.innerHTML += (`<p> Os numeros na ordem crescente ${valores.sort()}`)





}


}
