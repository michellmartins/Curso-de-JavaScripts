function conte () {
     let ini = document.querySelector('#txti')
     let fim = document.querySelector('#txtf')
     let pass = document.querySelector('#txtp')
     let res = document.querySelector('#res')
     if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {

        alert ('ERRO - Favor digitar os dados')
 }   
    else {
        
        res.innerHTML = 'Contando . . . '

    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pass.value)
    let c = 1 

        if (p <= 0) {

            alert ('Passo invalido, será valido o passo 1')
            p = 1
        }
        if (i < f) {

            for (c = i; c <= f ; c = c + p) {
                
                
                res.innerHTML += `${c} \u{1f7e2}`
            }
        } else {
            for (c = i ; c >= f ; c = c -p) {

                res.innerHTML += `${c} \u{1f534}`
            }
        }

        res.innerHTML += `\u{1f534}`
}  
}