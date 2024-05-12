function conte() {
    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let pass = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {

        alert('[Erro] - Favor digitar os dados')

    }else {

        res.innerHTML = 'Contando ...'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        if (p <= 0) {

            alert('Passo Invalido , sera considerado o passo 1')

                p = 1

        }

        if (i < f ) {

            let c= 1
            for (c = i ; c <= f ; c = c + p ) {

                res.innerHTML += `${c} \u{1f49a}`
            }         
        } else {

            for (c = i ; c >= f ; c = c -p) {

                res.innerHTML += `${c} \u{1f9e1}`
            }
        }


            res.innerHTML += `\u{1f9e2}`
    }
    
    }
    