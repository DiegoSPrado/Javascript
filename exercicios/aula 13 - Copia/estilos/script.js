function idade() {
        var data = new Date()
        var ano = data.getFullYear()  
        var anoNasc = document.querySelector('input#iage')
        var res = document.querySelector('div#dados')
        
       if (anoNasc.value.length == 0 || Number(anoNasc.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
       } else {
        var fsex = document.getElementsByName('radcheck')
        var idade = ano - Number(anoNasc.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
                gênero = 'Homem'
                if (idade >= 0 && idade < 12) {
                        //criança
                        img.setAttribute('src',  'meninoimg.jpg')
                } else if (idade < 22) {
                        //jovem
                        img.setAttribute('src', 'jovemimg.jpg')
                } else if (idade < 50) {
                        //Adulto
                        img.setAttribute('src', 'homemimg.jpg')
                } else {
                        //idoso
                        img.setAttribute('src', 'idosoimg.jpg')
                }

        } else if (fsex[1].checked) {
                gênero = 'Mulher'
                if (idade >= 0 && idade < 12) {
                        //criança
                        img.setAttribute('src', 'meninaimg.jpg')
                } else if (idade < 22) {
                        //jovem
                        img.setAttribute('src', 'jovemwmimg.jpg')
                } else if (idade < 50) {
                        //Adulto
                        img.setAttribute('src', 'mulherimg.jpg')
                } else {
                        //idoso
                        img.setAttribute('src', 'idosaimg.jpg')
                }
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos um(a) ${gênero} com ${idade} anos.`
       res.appendChild(img) 
}