/*let listaProdutos = ["geladeira" , "fogão" , "coifa"]
let listaEmMaiuscula = listaProdutos.map(primeiraEMaiuscula)

console.log(`Array Original = ${listaProdutos}` )
console.log(`Array retomada pelo metodo map(): ${listaEmMaiuscula}`)

function primeiraEMaiuscula(elemento) {

    return elemento.charAt(0).toUpperCase() + elemento.slice(1);
}*/

var arrayNomes = [ 
    
    {nome: 'Maria' , sobrenome: 'Souza' },
    {nome: 'João' , sobrenome: 'Gonçalves'},
    {nome: `Pedro`, sobrenome: `Silva`}]

var nomesCompleto = arrayNomes.map(concatenarNomes) 

console.log(nomesCompleto)

function concatenarNomes (elemento) {

    let nome = {}
    
    nome['nomesCompleto'] = `${elemento.nome} ${elemento.sobrenome}`
    
    return nome
}

