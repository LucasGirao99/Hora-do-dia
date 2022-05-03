function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 6) {
        //Boa madrugada
        img.src = 'madrugada.png'
        document.body.style.background = '#00303c'
    } else if (hora >= 6 && hora <12) {
        // Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#8f8d66'
    } else if (hora >=12  && hora<18 ) {
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#7d3f1a'
    } else {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#3e302f'
    }
}
