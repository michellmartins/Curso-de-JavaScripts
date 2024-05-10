function tabuada() {

    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if (num.value.length == 0) {

        alert('Favor digitar um numero para tabuada')

    }
    else {

        var c = 1
        tab.innerHTML = " "
        while (c <= 10){

            var n = Number(num.value)
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${c * n}`
            tab.appendChild(item)
            c = c + 1 
        }
    }
}