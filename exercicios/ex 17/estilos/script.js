function gerar() {
    var num = document.querySelector('input#inum')
    var tab = document.querySelector('select#itab')

    if (num.value.length == 0){
        window.alert('Digite um número para a tabuada.')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item  = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
