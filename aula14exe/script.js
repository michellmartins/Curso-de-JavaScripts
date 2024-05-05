function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pass = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {

        alert('[ERRO] - Dados Incompletos')
    } else {
        res.innerHTML = 'Contando ... '

    var i = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pass.value)

    if ( p <= 0) {
        p = 1
       
        alert('Passos Invalidos. Será considerando o passo 1 ')
    }

    if (i < f) {
        for (var c = i ; c <= f ; c = c + p) {

            res.innerHTML += ` ${c} \u{1f9b6}`
        }
    } else {
        for (var c = i ; c >= f ; c = c - p) {
            res.innerHTML += `${c} \u{1f9b6}`
        }
    }

    res.innerHTML += `${c} \u{1f3c1}`
    }


}

