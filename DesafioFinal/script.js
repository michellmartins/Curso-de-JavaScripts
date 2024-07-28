let num = document.querySelector('#txtn')
let lista = document.querySelector('#instab')
let res = document.querySelector('#res')
let valores = []

function analisar () {

    if(insNumero(num.value) && !insLista(num.value,valores)) {

        alert ('Valor ok')

    }else {

        alert (' Valor invalido ou ja adcionado')
    }
}