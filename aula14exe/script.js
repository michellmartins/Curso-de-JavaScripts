function conte() {

    let ini = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let pass = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {

        alert('Erro - Dados invalidos')
    } else {
        res.innerHTML = 'Contando ...'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)

        if (p <= 0) {

            alert('Passo invalido , sera considerado o passo 1')
            p= 1
        }

        if (i <= f) {

            for (var c = i; c <= f; c = c + p) {

                res.innerHTML += `${c}\u{1f7e2}` 
            }
            } else {
                
                for (var c = i; c >= f; c = c - p) {

                    res.innerHTML += `${c}\u{1f534}`
                }
            }


        }






    }



