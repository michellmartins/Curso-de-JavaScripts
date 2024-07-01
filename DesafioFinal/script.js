let num = document.querySelector('#txtn')
let lista = document.querySelector('#instab')
let res = document.querySelector('#res')
let valores = []

function insNumero(n) {

  if (Number(n) >= 1 && Number(n) <= 100) {

    return true

  } else {

    return false
  }
}

function insLista(n, l) {

  if (l.indexOf(Number(n)) != -1) {

    return true

  } else {

    return false
  }
}


function analisar() {

  if (insNumero(num.value) && !insLista(num.value, valores)) {

    valores.push(Number(num.value))
    item = document.createElement('option')
    item.text = `O valor é ${num.value}`
    lista.append(item)


  } else {

    alert('ERRO - Valor indevido ou Valor já inserido')
  }

  num.value = " "
  num.focus()
}

function finalizar() {

  let total = valores.length
  let maior = valores[0]
  let menor = valores[0]
  let soma = 0
  let media = 0



  if (total == 0) {

    alert('Favor digitar enter 1 a 100')

  } else {

  

    for (let pos in valores) {

      if (valores[pos] > maior) {

        maior = valores[pos]

      }

      if (valores[pos] < menor) {

        menor = valores[pos]
      }

      soma = soma + valores[pos]
      media = soma / total
    }

    res.innerHTML = `Os Números no total foram ${total}`
    res.innerHTML += `<p> O maior numero é ${maior}`
    res.innerHTML += `<p> O menor numero é ${menor}`
    res.innerHTML += `<p> O Soma dos valores é ${soma}`
    res.innerHTML += `<p> A média dos valores é ${media}`
    res.innerHTML += `<p> Os valores na sequencia é ${valores}`
    res.innerHTML += `<p> Os valores na ordem é ${valores.sort((a,b) => a-b )}`









  }
}