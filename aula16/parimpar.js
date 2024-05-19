let num = 2

let dado = num
function parimpar(num) {

    if (num % 2 == 0) {

        return 'Par'
    }
    
    else {

        return 'IMpar'
    }
 
}

console.log (`O ${num} é ${parimpar(dado)}`)