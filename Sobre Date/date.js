/*new Date (ano, mes, dia, hora, minuto, segundo , milissegundo)

let data = new Date(1981, 4, 15, 20, 15, 5, 0)

console.log(data) */

Date.prototype.getMesEmPortugues = function() {
    if (this.getMonth() == 0){this.mesEmPortugues = "Janeiro"};
    if (this.getMonth() == 1){this.mesEmPortugues = "Fevereiro"};
    if (this.getMonth() == 2){this.mesEmPortugues = "Março"};
    if (this.getMonth() == 3){this.mesEmPortugues = "Abril"};
    if (this.getMonth() == 4){this.mesEmPortugues = "Maio"};
    if (this.getMonth() == 5){this.mesEmPortugues = "Junho"};
    if (this.getMonth() == 6){this.mesEmPortugues = "Julho"};
    if (this.getMonth() == 7){this.mesEmPortugues = "Agosto"};
    if (this.getMonth() == 8){this.mesEmPortugues = "Setembro"};
    if (this.getMonth() == 9){this.mesEmPortugues = "Outubro"};
    if (this.getMonth() == 10){this.mesEmPortugues = "Novembro"};
    if (this.getMonth() == 11){this.mesEmPortugues = "Dezembro"};
};
var data = new Date();
data.getMesEmPortugues();
console.log("O mês atual é : " + data.mesEmPortugues);