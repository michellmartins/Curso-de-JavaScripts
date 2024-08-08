let filhos = [ 'Michell', 'Allan', 'Priscilla']

let netos = [ 'Erick', 'João Victor' , 'Milena' , 'Michell']

let naoNeto = []


for ( indexFilhos = 0 ; indexFilhos < filhos.length ; indexFilhos++)  {

    for (indexNetos = 0 ; indexNetos < netos.length ; indexNetos++)   {

        if (filhos[indexFilhos] === netos[indexNetos]) {

            naoNeto.push(filhos[indexFilhos])
            
        }

 }
}

console.log(`${naoNeto}`)
