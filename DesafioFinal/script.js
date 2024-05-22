let num = document.querySelector('#txtn')
let tab = document.querySelector('#instab')
let res = document.querySelector('#res')
let valores = []

function insNumero(n) {

    if (Number(n) >= 1 && Number(n) <= 100) {

        return true
    }else {
        return false
    }
}

function insLista (n,l) {
    
    if (l.indexOf(Number(n)) != -1) {

        return true

    } else {

        return false
    }
}

function analisar() {

    if (insNumero(num.value) && !insLista(num.value,valores)) {

        valores.push(Number(num.value))


        let item = document.createElement('option')
        item.text = `O ${num.value} foi adcionado`
        tab.appendChild(item)
        res.innerHTML = ' '

  }  else {

        alert('Numero invalido ou já inserido')
    }

    num.value = " "
    num.focus()
}

function finalizar () {

        if (valores.length == 0) {

            alert('Favor inserir um valor acima')

        }
        else {

            let tot = valores.length

            res.innerHTML = " "

            res.innerHTML += (`O total de elementos ${tot}`)
            
        }

        
}