let valores = [17, 12, 5, 18, 20, 14, 1, 8, 7, 3]

console.log(valores)

console.log(`O Vetor possui ${valores.length}`)

var pos =  valores.indexOf(3)

if (pos == -1) {

    console.log(`O valor nao foi encontrado`)
   

}else {

  //*  for (pos = 0 ; pos < valores.length ; pos++) {

   //*     console.log(`A posição ${pos}, possui o valor de ${valores[pos]}`) } 

    for (pos in valores ) {

        console.log(`A posição ${pos}, possui o valor de ${valores[pos]}`)
    }

}
 
   
