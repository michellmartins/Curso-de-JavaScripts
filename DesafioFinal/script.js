let megaSena = [ 25, 14,34,3,15,2 ]

let jogados = [ 15, 10, 25, 34 , 2 , 3]

let acertado = []

console.log(`****** MEGA-SENA ******`)
for (indexMega = 0 ; indexMega < megaSena.length ; indexMega++) {   
    for (indexJogados = 0 ; indexJogados < jogados.length ; indexJogados++) 

        if (megaSena[indexMega] === jogados[indexJogados]) {

            acertado.push(megaSena[indexMega])
        }
    }
console.log(`Os Números da Mega-Sena são compostos por ${megaSena.length} números`)
console.log(`Os Números da Mega-Sena sorteados foram ${megaSena}`)
console.log(`Os Números jogados foram ${jogados}`)
console.log(`Você acertou ${acertado.length}`)
console.log(`Foram eles ${acertado}`)
