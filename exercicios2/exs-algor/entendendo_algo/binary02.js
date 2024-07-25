let listaNum = [1, 3, 5, 6, 7, 9, 10, 12];
let ite = 10

let  pesquisa_binaria = (lista, item=ite,chute, baixo, alto, meio) => {
    baixo = 0;
    alto = lista.length - 1;
    while (baixo <= alto) {
        meio = Math.floor((baixo + alto) / 2);
        chute = lista[meio];
        if (chute === item) {
            return meio;
    } if (chute > item) {
        alto = meio -1;
    } else {
        baixo = meio + 1;
    }
    return -1
}}

console.log(pesquisa_binaria())
console.log(pesquisa_binaria())