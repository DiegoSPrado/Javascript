const soma = (n1, n2) => {
    return n1 + n2
}
console.log(soma(20, 45))

const pesquisa_binaria = (array, item) => {
    let baixo = 0
    let alto = array.length - 1
    while (baixo <= alto) {
        let meio = Math.floor((baixo + alto)/2)
        let chute = array[meio]
        if (chute === item) {
            return item
    
    } else if (array[meio] > chute)
}
}
