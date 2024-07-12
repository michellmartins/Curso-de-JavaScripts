/*let num = [1,2,3,4,5,6,7,8,9,10]
function checaPar (elemento,indice) {

  if ( elemento % 2 == 0) {

    console.log(`${elemento} corresponde a ${indice} posição`)
  }
}
num.forEach(checaPar) */

/* let num = [1,2,3,4,5,6,7,8,9,10]

num.forEach(function checaPar(elemento) {

    if (elemento % 2 == 0) {

      console.log(elemento)
    }

}) */

/* let num = [1,2,3,4,5,6,7,8,9,10]

num.forEach(elemento => {

  if (elemento % 2 == 0 ) {

    console.log(elemento)

  }
}) */

/*var arrayMarcas = ['Ford', 'BMW', 'Fiat', 'Audi', 'Volkswagen'];
arrayMarcas.forEach((marca, indice) => {
  console.log("A marca " + marca + " corresponde ao índice: " + indice);
  if (marca === 'BMW') {
    let itemExcluido = arrayMarcas.shift();
    console.log("Excluímos o elemento " + itemExcluido);
  }
});

console.log(arrayMarcas) */

/*var marcas = [{ marca: 'Ford', modelo: 'Focus' },
{ marca: 'BMW', modelo: 'BMW Z4' },
{ marca: 'Fiat', modelo: 'Palio' },
{ marca: 'Audi', modelo: 'A3' }];
marcas.forEach((elemento) => {
  console.log("Marca: " + elemento.marca + " - modelo: " + elemento.modelo);
}) */ 

  function Operacoes() {
    this.resultadoSoma = 0
    this.resultadoSubtracao = 0
}
Operacoes.prototype.adicionar = function(arrayNumeros) {
    arrayNumeros.forEach((elemento) => {
      this.resultadoSoma = this.resultadoSoma + elemento;
    }, this)
}
Operacoes.prototype.subtrair = function(arrayNumeros) {
    arrayNumeros.forEach((elemento, indice) => {
        if (indice == 0)
            this.resultadoSubtracao = elemento;
        else
            this.resultadoSubtracao = this.resultadoSubtracao -  elemento;
    }, this)
}
var operacoesMatematicas = new Operacoes();
operacoesMatematicas.adicionar([5,10,20]);
console.log("O resultado da soma é " + operacoesMatematicas.resultadoSoma);
operacoesMatematicas.subtrair([200,100,50]);
console.log("O resultado da subtração é " + operacoesMatematicas.resultadoSubtracao);



