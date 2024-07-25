var btn = document.getElementById('botao')
btn.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoNasc = document.getElementById('innum')
    var res = document.getElementById('result')
    
    if (anoNasc.value.length == 0 || anoNasc.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('insex')
        var idade = ano - Number(anoNasc.value)
        var genero = ''
        var img = document.createElement('img') //Isso faz com que se crie um elemento, que no caso é uma imagem.  
        img.setAttribute('id', 'foto') //ele adicionou um atributo para a var img 
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 13) {
                //Criança
                img.setAttribute('src', 'images/meninoimg.jpg')
            } else if (idade <= 22) {
                //Jovem adulto
                img.setAttribute('src', 'images/jovemimg.jpg')
            } else if (idade <= 59) {
                //Adulto
                img.setAttribute('src', 'images/homemimg.jpg')
                
            } else {
                //Idoso
                img.setAttribute('src', 'images/idosoimg.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 13) {
                //Criança
                img.setAttribute('src', 'images/meninacriimg.jpg')
            } else if (idade <= 22) {
                //Jovem adulto
                img.setAttribute('src' , 'images/jovemwmimg.jpg')
            } else if (idade <= 59) {
                //Adulto
                img.setAttribute('src', 'images/mulherimg.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'images/idosaimg.jpg') // o setAttibute esta atribuindo na src da imagem, a 'caminho' de cada imagem
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) //o appendchild cria um novo elemento abaixo, e no caso esse é as imgs ;) 
    }
}