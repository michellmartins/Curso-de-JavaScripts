function periodo() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var texto = window.document.getElementById('texto')
    var hora = data.getHours()



   
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12 ){
        document.body.style.background = '#e2cd9f'
        img.src = './imagens/manha.jpg'
        texto.innerHTML = 'Bom Dia!!'

    }
    else if (hora >= 12 && hora <= 18) {
        document.body.style.background = '#b9846f'
        img.src = "./imagens/tarde.jpg"
        texto.innerHTML = 'Boa Tarde!!'
    }
    
    else {
        document.body.style.background = '#515154'
        img.src = "./imagens/noite.jpg"
        texto.innerHTML = 'Boa Noite!!'
    
}
}