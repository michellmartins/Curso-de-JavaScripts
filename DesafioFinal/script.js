let megaSena = [ 23,10,5,15,12,34]
let jogados = [1,98,15,11,9,32]
let acertou = []

for (indexM = 0 ; indexM < megaSena.length ; indexM++) {
  for (indexJ = 0; indexJ < jogados.length ; indexJ++) {

    if (megaSena[indexM] == jogados[indexJ]) {

      acertou.push(megaSena[indexM])

    }
  }

}

console.log(`${acertou}`)
