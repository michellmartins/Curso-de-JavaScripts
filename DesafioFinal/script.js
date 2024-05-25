let num = document.querySelector("#txtn")
let tab = document.querySelector('#instab')
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

    if(l.indexOf(Number(n)) != -1) {

        return true 

    } else {

        return false

    }

}


function analisar() {

    if (insNumero(num.value) && !insLista(num.value,valores)) {

        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `O Valor inserido foi ${num.value}`
        tab.appendChild(item) 
        res.innerHTML = ' '
       
        
       

    } else {
    
        alert( 'Valor Invalido ou já foi inserido')
        
        
    }

    num.value = " "
    num.focus()
    
    
}



function finalizar() {

    if ( valores.length == 0) {

        alert('Favor digitar uma valor acima')

    }else {
        

        tot = valores.length
        let maior = 0
        let menor = 0
        let soma = 0

        
        
        res.innerHTML = " "
        res.innerHTML += `O valor total de elementos é ${tot}`
       
    }

    
        
    
}


