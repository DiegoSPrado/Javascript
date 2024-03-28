let num = document.querySelector('input#inum')
let sel = document.querySelector('select#islct')
let res = document.querySelector('div#d2')
let valores = []
 
 function éNmr(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

 function éList(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

 }
 
 function adicione() {
    if (éNmr(num.value) && !éList(num.value, valores)) {
     valores.push(Number(num.value))
     let item = document.createElement('option')
     item.text = `O valor ${num.value} adicionado.`
     sel.appendChild(item) 
     res.innerHTML = ''  
    } else {
        alert('Digite um número válido ou que não esteja na lista!')
    }
    num.value = ''
    num.focus()
 }


function finalizar() {
    if(sel.length == 0) {
        //alert('Adicione números para finalizar.')
    } else {
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
         if (valores[pos] < menor)
            menor = valores[pos]
        }

        media = soma / tot

        res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p> `
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}. </p>`
        res.innerHTML += `<p>A média dos valores digitados é de ${media}.</p>`

    }
}



