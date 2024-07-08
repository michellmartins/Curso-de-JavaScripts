/*new Date (ano, mes, dia, hora, minuto, segundo , milissegundo)

let data = new Date(1981, 4, 15, 20, 15, 5, 0)

console.log(data) */

/*const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
let data = new Date();
let dataFormatada = ((data.getDate() + " " + meses[(data.getMonth())] + " " + data.getFullYear()));
console.log(dataFormatada);
//saída: 31 Dez 2019 */

function adicionaZero(numero){
    if (numero <= 9) 
        return "0" + numero;
    else
        return numero; 
}
let dataAtual = new Date(); //29/01/2020
let dataAtualFormatada = (adicionaZero(dataAtual.getDate()) + "/" + (adicionaZero(dataAtual.getMonth()+1)) + "/" + dataAtual.getFullYear());
console.log(dataAtualFormatada);
// saída: 29/01/2020
let dataAtual2 = new Date(); //02/10/2020
let dataAtualFormatada2 = (adicionaZero(dataAtual2.getDate().toString()) + "/" + (adicionaZero(dataAtual2.getMonth()+1).toString()) + "/" + dataAtual2.getFullYear());
console.log(dataAtualFormatada2);
// saída: 02/10/2020