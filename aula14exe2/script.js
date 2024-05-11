function tabuada() {
    let num = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if (num.value.length == 0) {

        alert('Por favor , digite um numero')
    } else {

        let n = Number(num.value)
        c = 1
        tab.innerHTML = " "
        
        

        while (c <= 10) {

            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
            c = c + 1

        }
    }
}