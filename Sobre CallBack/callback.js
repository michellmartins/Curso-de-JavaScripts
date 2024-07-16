/*function primeiroBloco(){
	// Aguardar 5 segundos
    setTimeout( function(){
    console.log('Esse é o primeiro bloco de comandos após 5 segundos');
    }, 5000 );
}

function segundoBloco() {
setTimeout (function() {
    console.log('Esse é segundo bloco de comandos após 10 segundos');
}  , 10000) ;
}

primeiroBloco()
segundoBloco() */

/* function exibeMensagensNaOrdem(mensagem, callback) {
	console.log(mensagem);
	callback();
}
exibeMensagensNaOrdem('Essa é a primeira mensagem exibida na ordem', function() {
	console.log('Essa é a segunda mensagem exibida na ordem');
}); */


/*var fs = require('fs'); 
console.log("Primeiro comando");
fs.readFile('./arquivo.txt', callback);
function callback(err, conteudo){
	if (err) return console.error(err);
    console.log(String(conteudo));
}
console.log("Segundo comando");
console.log("Terceiro comando");*/


function soma (a,b) {

    let op = a + b 
    console.log(op)
    }

    function multiplicacao (a,b) {

        let op = a * b 
        console.log(op)
    }
soma(2,2)

multiplicacao(2,4)



