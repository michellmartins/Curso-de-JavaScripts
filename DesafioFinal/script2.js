let netos = [ 'Erick' , 'João' , 'Allana' , 'Milena']

let repete = [ 'Erick' , 'Milena']

let igual = []

for (indexN = 0 ; indexN < netos.length ; indexN++ ) {

    for ( indexR = 0 ; indexR < repete.length ; indexR++) 

        if( netos[indexN] === repete[indexR])

            igual.push(netos[indexN])
}

console.log(igual)