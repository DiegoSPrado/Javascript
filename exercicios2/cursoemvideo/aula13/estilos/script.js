var agora = new Date()
var hora = agora.getHours()
var img = document.querySelector('img#horario')
var texto = document.getElementById('txt')
    texto.innerHTML += `<p>Agora são ${hora} horas.</p>`

if (hora < 12) {
   divimg.src = 'images/fotomanha.jpg'    
} else if (hora <= 18) {
    document.body.style.background = '#ee6b2f'
    img.src = 'images/fototarde.jpg'
} else {
    document.body.style.background = '#474949'
    img.src = 'images/fotonoite.jpg'
}