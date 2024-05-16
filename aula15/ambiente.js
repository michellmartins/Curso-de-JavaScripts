let dados = ["Milena", "Michell", "Diana" ]

console.log(`A quantidade de nomes no Vetor são ${dados.length}`)

let nome = dados

/*for (nome = 0 ; nome < dados.length ; nome = nome + 1) {

    console.log(`Na posição ${nome}, está a ${dados[nome]} `)
    

} */
nome.push("Erick")

nome[3] = "Liduina"

nome.sort()


for (nome  in dados ) {

    console.log(`Na posição ${nome}, está a ${dados[nome]} `)
}