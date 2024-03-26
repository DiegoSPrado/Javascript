function calcular() {
    var inicio = document.querySelector('input#inic')
    var fim = document.querySelector('input#inum2')
    let pass = document.querySelector('input#ipass')
    let res = document.querySelector('div#d2')

    if (inicio.value.length == 0 || fim.value.length == 0|| pass.value.length == 0) {
        //window.alert('[ERRO] Digite um número válido.')
        res.innerHTML = `ERRO: Digite um Número.`
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        
        if (p <= 0) {
            //Caso o passo seja igual a 0 ou inferior a tal
            window.alert('ERROOOOOOOOOOOOO')
            p = 1
        }

        if (i < f){
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} ` 
             }
             
        } else {
            //Contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` 
    }
}

