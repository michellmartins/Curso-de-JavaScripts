function tabuada() {

    let num = document.querySelector("#txtn")
    let tab = document.querySelector('#seltab')

    if (num.value.length == 0) {

        alert('Favor um digitar um numero para tabuada')

    
    } else {

        let n = Number(num.value)
        let c = 1
        tab.innerHTML = " "

        while (c <= n) {

            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${c*n}`
            tab.appendChild(item)
            c++
        }

    }
}