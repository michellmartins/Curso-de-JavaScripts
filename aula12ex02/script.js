function chamada() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#iano')
    var res = document.querySelector('#res')


    if (fano.value.length == 0 || Number(fano.value > ano) || Number(fano.value < 0))

        alert('[ERRO} Verifique os dados e tente novamente')

    else 

        var fsex = document.getElementsByName('sexo')
    var idade = ano - fano.value
    var genero = " "
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade <= 10) {
            img.setAttribute('src', './imagens/bebe_masc.jpg')
        } else if (idade <= 21) {
            img.setAttribute('src', './imagens/jovem_masc.jpg')
        } else if (idade <= 50) {
            img.setAttribute('src', './imagens/adulto_masc.jpeg')

        } else {

            img.setAttribute('src', './imagens/idoso_masc.jpg')
        }
    }else if (fsex[1].checked){   
        genero = 'Mulher'
        if (idade <=10){
        img.setAttribute('src' , './imagens/bebe_fem.jpg')
        }else if (idade <=21){
        img.setAttribute('src' , './imagens/jovem_fem.jpg') 
        }else if (idade <=50) {
        img.setAttribute('src' , './imagens/adulto_fem.jpeg')
        } else {
            img.setAttribute('src', './imagens/idoso_fem.jpg')
        }
        

    }
    res.style.textAlign = 'center'
    res.innerHTML = (`Detectamos ${genero} com idade ${idade}  anos`)
    res.appendChild(img)

}
