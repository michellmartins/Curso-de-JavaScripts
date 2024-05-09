function tabuada() {

    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if (num.value == 0) {

        alert('Por favor digite um numero')
    }
    else {

       var c = 1
       tab.innerHTML = ''
        while (c <= 10) {
            var n = Number(num.value)
            var item = document.createElement('option')
             item.text = `${n} x ${c} = ${n*c}`
             tab.appendChild(item)
             c = c + 1 
        }
    }

}