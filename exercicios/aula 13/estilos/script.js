    var msg = document.querySelector('div#d1')
    var img = document.querySelector('img#imagem')
    //var hrExt = new Date()
    var hora = 19
    
    var msg2 = document.querySelector('h1#txt')
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
     
    if (hora <= 11 && hora >= 5) {
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#F3C0A1'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#FFAB6F'
    } else {
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#30445F'
    }


