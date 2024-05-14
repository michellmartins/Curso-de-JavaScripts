function contador () {

    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let pass = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 ||pass.value.length == 0) {

            alert('Erro - Favor digitar os dados')    
    }else {
        
        res.innerHTML = 'Contando ... '
    }

    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pass.value)

    res.innerHTML = ' '
    
    if (p <= 0) {

        alert('Passo invalido , favor considerar passo 1')
        p = 1
        
    }

    if (i < f) {

    for (let c = i; c <= f ; c = c + p) {

        res.innerHTML += ` ${c} \u{1f49a} `
    
    }
    }else {
        for (let c = i ; c >= f ; c = c - p) {
            res.innerHTML += ` ${c} \u{1f9e1}`
        }

       
    }
    res.innerHTML += ` F I M `
}