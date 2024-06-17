//var agora = new Date()
var hora = 11
var divimg = document.querySelector('div#timg')
var texto = document.getElementById('txt')
    texto.innerHTML += `<p>Agora são ${hora} horas.</p>`

if (hora < 12) {
   divimg.src = '../images/fototarde.jpg'    
} else if (hora <= 18) {
    document.body.style.background = '#ee6b2f'
    divimg.src = '../images/fototarde.jpg'
} else {
    document.body.style.background = '#474949'
    
}