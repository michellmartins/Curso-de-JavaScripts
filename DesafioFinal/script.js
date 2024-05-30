let num = document.querySelector('#txtn')
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

function insLista (n,l) {

    if (l.indexOf(Number(n)) != -1) {

        return true
    }else {
        
        return false
    }
}




function analisar () {

    if (insNumero(num.value) && !insLista(num.value,valores)) {

       valores.push(Number(num.value))

       let item = document.createElement('option')
       item.text = `O valor inserido foi ${num.value}`
       lista.appendChild(item)
       res.innerHTML = " "


    
} else {

    alert (" [ERRO] - Valor invalido ou Já inserido")
}

num.value = ' '
num.focus()
}


function finalizar() {

    if (valores.length == 0) {

        alert ( 'Favor digitar um valore entre 0 e 100')
    
    } else {

        let total = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0

        for (let pos in valores ) {

            if ( valores[pos] > maior) {

                maior = valores[pos]

        }   if (valores[pos] < menor) {

                menor = valores[pos]
        }

            soma = soma + valores[pos]
            media = soma / total

        }


        res.innerHTML += `<p> O total de números digitados foram ${valores.length}`
        res.innerHTML += `<p> O maior valor é ${maior}`
        res.innerHTML += `<p> O menor valor é ${menor}`
        res.innerHTML += `<p> A soma dos valores é ${soma} `
        res.innerHTML += `<p> A media dos valores é ${media}`
        res.innerHTML += `<p> Os numeros digitados foram ${valores}`






    }






}