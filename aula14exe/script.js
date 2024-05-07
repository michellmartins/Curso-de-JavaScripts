function conte () {
    var ini = document.querySelector('#txti')
    var fim = document.querySelector('#txtf')
    var pass = document.querySelector('#txtp')
    var res =  document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {

        alert('[ERRO] - Favor Digitar os Dados')
        
    }else {
        res.innerHTML = 'Contando . . . '

        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)

        if ( p <= 0) {

            alert('Passo invalido, será considerado passo 1'  )

            p = 1 

        }


        if (i <= f) {

            for (var c = i ; c <= f ; c = c + p )

                res.innerHTML += `${c} \u{1f449}`
        }else {
            for (var c = i ; c >= f ; c = c - p)

                res.innerHTML += `${c} \u{1f449}`
        }
        res.innerHTML += `\u{1f448}`
    }
}