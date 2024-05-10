function conte() {
    var ini = document.querySelector('#txti')
    var fim = document.querySelector('#txtf')
    var pass = document.querySelector('#txtp')
    var res = document.querySelector('#res')

    if ( ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {

        alert('ERRO - Favor digitar os dados corretos')
        
    }else {

        res.innerHTML = "Contando. . . "

        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)

        if (p <= 0) { 

            alert('Passos invalidos , iniciar com passo 1')

            p = 1
        }

        if (i <= f) {

            for (var c = i ; c <= f ; c = c + p) {

                res.innerHTML += `${c} \u{1f7e2}`
            }

        }else {
            for (var c = i ; c >=f ; c = c - p) {

                res.innerHTML += `${c} \u{1f534}`
            }
        }

        res.innerHTML += `\u{1f534}`

    }

}