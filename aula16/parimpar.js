let item = 51

let numero = parimpar(item)

function parimpar(numero) {

    if ( numero%2 == 0 ) {

        return "Par"

    }else {

        return "Impar"
    }
}

console.log(`Número ${item}, é um Numero ${numero}`)
