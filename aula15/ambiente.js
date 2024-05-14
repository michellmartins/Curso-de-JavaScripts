let dados = [5,2,3,1,9,8,7,6,4]

console.log(dados)
console.log(`O vetor possui ${dados.length} valores`)



let pos = dados

/* for (let pos = 0 ; pos < dados.length ; pos++) {

    console.log (`A posição ${pos} o valor é ${dados[pos]}`)
}
*/

for(pos in dados ) {

    console.log (`A posição ${pos} o valor é ${dados[pos]}`)
}

console.log(dados.indexOf(3))




