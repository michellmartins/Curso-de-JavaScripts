let num = document.querySelector('#txtn')
let tab = document.querySelector('#instab')
let valores = []


function insNumero(n) {

    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }else

        return false
}

function insLista(n,l) {

    if (l.indexOf(Number(n)) != -1) {

        return true
    }else {

        return false
    }
}




function analisar () {

    if (insNumero(num.value) && !insLista(num.value,valores)) {
        let c = Number(num.value)
        let item = document.createElement('option')
        item.text = `O valor inserido foi ${c}`
        tab.appendChild(item)
    }

    else {

        alert('Valor incorreto ou já inserido')
    }    
}

