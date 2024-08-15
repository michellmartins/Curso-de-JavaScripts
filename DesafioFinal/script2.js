let megaSena = [ 1 , 23, 45, 11 , 74,  5]

let jogados = [ 2 , 24 , 46 , 11, 73 , 5]

let acertados = []

for ( indexMega = 0 ; indexMega < megaSena.length ; indexMega++ ) {

    for (indexJog = 0 ; indexJog < jogados.length ; indexJog++) {

        if ( megaSena[indexMega] === jogados[indexJog]) {

            acertados.push(megaSena[indexMega])
        }
    }


}

console.log(acertados.join(" % "))