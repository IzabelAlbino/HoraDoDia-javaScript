function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        //BOM DIA
        if(hora == 1) {
            msg.innerHTML = 'Agora, é 1 hora.'
        }
        img.src = 'img/1.png'
        document.body.style.background = 'orange'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'img/2.png'
        document.body.style.background = "red"
    } else if (hora  > 18) {
        //BOA NOITE
        img.src = 'img/3.png'
        document.body.style.background = "black"
    } else {
        msg.innerHTML = 'Hora não definida.';
        img.src = 'img/4.png'
        document.body.style.background = 'gray'
    }
    
}
