/*var arrayLiteral = [];
arrayLiteral[0] = "Olá";
arrayLiteral[1] = ' tudo bem'

console.log(`${arrayLiteral}`)*/

/*var arrayBidimensionalLiteral = [];
arrayBidimensionalLiteral[0] = ["João", "Souza", 20, "Direito"];
arrayBidimensionalLiteral[1] = ["Maria", "Gonçalves", 21, "Medicina"];
console.log(`${arrayBidimensionalLiteral}`);*/

/* Array.prototype.retornaPares = function() {
  var numerosPares = [];
  this.forEach(elemento => {
      if (elemento % 2 === 0 )
          numerosPares.push(elemento);
  })
  return numerosPares;
};
var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayPares = arrayNumeros.retornaPares();
console.log(arrayPares); */

/* var frase = "JavaScript"
var arrayFrase = Array.from(frase);
console.log(arrayFrase); */

/*var nomes = ["João","Maria", "Paulo", "Pedro"];
console.log(Array.isArray(nomes));

var nomesString = "João, Maria, Paulo, Pedro";
console.log(Array.isArray(nomesString)); */

/*var novoArray = Array.of(2);
console.log(novoArray);
var outroArray = Array.of(1,2,3);
console.log(outroArray);
var arrayVazio = Array.of();
console.log(arrayVazio);*/

/* const valores = [10, 20, 30, 40, 50, 60]

console.log(valores.join())
console.log(valores.join(' '))
console.log(valores.join(' - ')) 
console.log(valores.join(' . '))*/

/*const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

valores.forEach((valor, index) => {
    console.log('Index: ' + index + ' Value: ' + valor);
});*/

/* const nomes = ["Luan", "Daniel", "José", "Pedro", "João", "Caio", "Mariana", "Joaquim", "Lígia", "Rafaela", "Aline", "Barbara", "Carol"]

console.log("Array original : ", `${nomes}`)

const nomesOrdenados = nomes.sort()
console.log("Array em ordem alfabetica :", `${nomesOrdenados}`) */


/* const numSorteio =  [10, 6, 23, 68, 92, 11, 4,100, 29, 7, 3, 99, 1, 2, 3, 20, 22, 23, 49, 90]

console.log("Array original:", `${numSorteio.join(' - ')}`)

const sorteado = numSorteio.sort((a,b) => a - b)

console.log("Numeros desordenados:", `${sorteado.join(' - ')}`) */

const valores = ["Joana", "José", "Maria", 5, 6, 10, 12, 20]

console.log(valores.splice(4))





