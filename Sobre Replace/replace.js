/*var texto = "Vamos estudar programação?";
var novoTexto = texto.replace("programação", "JavaScript");
console.log(texto);
console.log(novoTexto);*/

/*var texto = "Vamos estudar programação? Você gosta de programação? Estude Programação!";
var novoTexto = texto.replace(/programação/gi, "JavaScript"); // g = expressao regular global , i = flag 
console.log(texto)
console.log(novoTexto); */

/*var expressao = /(\w+)\s(\w+)\s(\w+)/;
var nomes = 'Pedro Paulo Maria';
var novosNomes = nomes.replace(expressao, '$3, $1 e $2 ');
console.log(novosNomes);  */

/* var strRG = "999999999";
var stringRGResultado = strRG.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/,"$1.$2.$3-$4");
console.log("O RG informado é: " + stringRGResultado);*/

/*var repetirString = 'JavaScript';
var resultado = repetirString.replace('JavaScript', 'Vamos substituir o texto e adicionar a palavra $&');
console.log(resultado);*/

/*var adicionarStringAntes = 'Vamos estudar Script';
var stringAntes = adicionarStringAntes.replace('Script','Java$&');
console.log(stringAntes); */

/*var adicionarStringDepois = "Vamos estudar Java";
var teste = 'Script';
var stringDepois = adicionarStringDepois.replace('Java', '$&Script');
console.log(stringDepois);*/

/*var valorCompra = "O valor da compra é de R$ 500.00." 
var valorComDesconto = valorCompra.replace(/(\d+).(\d+)/, function aplicarDesconto(valor) {
    let valordaCompra = parseFloat(valor);
    let desconto = 0;
    desconto = valordaCompra*0.1;
    return ((valordaCompra-desconto).toFixed(2) +
     ". Seu desconto foi de " + desconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    });
console.log(valorComDesconto);*/

var strLista = "Lista de compras: arroz, feijão, açúcar, óleo, Carne";
var listaSubstituicao = {
  arroz:"café",
  feijão:"macarrão",
  óleo:"vinagre",
  Carne:"ovos"
};
alteracaoLista = strLista.replace(/arroz|feijão|óleo|carne/gi, function(item){
    let it = listaSubstituicao[item];
    let itemLista = it.replace(/(?:^|\s)\S/g, function(elemento) { return elemento.toUpperCase(); });
    return itemLista;
});
console.log(alteracaoLista);





