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
console.log("Array em ordem alfabetica :", `${nomesOrdenados.join(' - ')}`) */


/* const numSorteio =  [10, 6, 23, 68, 92, 11, 4,100, 29, 7, 3, 99, 1, 2, 3, 20, 22, 23, 49, 90]

console.log("Array original:", `${numSorteio.join(' - ')}`)

const sorteado = numSorteio.sort((a,b) => a - b)

console.log("Numeros desordenados:", `${sorteado.join(' - ')}`) */

/* const valores = ["Joana", "José", "Maria", 5, 6, 10, 12, 20]

console.log(valores.splice(4)) */

/*const itens = ["Banana", "Macarrão", "Arroz", "Feijão", "Carne", "Tomate", "Laranja"]

console.log("array original", itens)

itens.push("Suco de uva")

console.log("Array adicionando novo produto" , itens) */

/*const names = ['Maria', 'João', 'Gabriela', 'Gabriel', 'Mariana', 'Matheus']
const lastItem = names.pop()

console.log('Array original sem o uso do metodo Pop()', names)

console.log('Ultimo nome do array:', lastItem) */

const numbers = [1, 8, 9, 7, 3]

let origem = numbers

const firstNumber = numbers.shift()

console.log('Array original:', origem)
console.log('Array sem o 1:', numbers)
console.log('Array usando o método:', firstNumber)

/*const alunos = ['Joaquim', 'Joana', 'José', 'Jasmim', 'Jardirei'];

alunos.unshift("João", "Jonas");

console.log("Array de alunos:", alunos)*/

/*const array = [10, 14, 21, 35, 1, 3, 5, 77, 84, 42, 444, 724, 49, 8, 11, 2, 6]

console.log(array.indexOf(10))

console.log(array.indexOf(84))

console.log(array.indexOf(6))

console.log(array.indexOf(1111))

console.log(array.indexOf(101)) */

/*const frase = "Eu estou aprendendo sobre lastIndexOf()"

console.log(frase.lastIndexOf('aprendendo')) */

/*var nomes = ['Silvia', 'Carlos', 'João', 'Maria', 'Paulo', 'Pedro'];
var nomesComP = nomes.filter(nome => nome.charAt(0) == "P" );
console.log(nomesComP);
// saída: [ 'Paulo', 'Pedro' ] */


/* var listaNomes = [ 'Silvia', 'Carlos', 'João', 'Maria', 'Paulo', 'Pedro' ];
var nomesMaiuscula = listaNomes.map(nome => nome.toUpperCase());
console.log(nomesMaiuscula);
// saída: [ 'SILVIA', 'CARLOS', 'JOÃO', 'MARIA', 'PAULO', 'PEDRO' ] */

/*var listaMeninas = ["Silvia", "Maria", "Joana"];
var listaMeninos = ["João", "Paulo", "Pedro"];
var listaPessoas = listaMeninas.concat(listaMeninos);
console.log(listaPessoas);
// saída: [ 'Silvia', 'Maria', 'Joana', 'João', 'Paulo', 'Pedro' ]
var listaPessoas2 = listaMeninos.concat(listaMeninas);
console.log(listaPessoas2);
// saída: [ 'João', 'Paulo', 'Pedro', 'Silvia', 'Maria', 'Joana' ] */

const array = [10, 22, 14, 30, 2];

const result = array.reduce(function(result, array){
  return result + array;
}, 0);

console.log(result)












