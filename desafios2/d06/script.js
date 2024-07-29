function contar() {
let inicio = Number(document.querySelector('input#num1').value);
let fim = Number(document.querySelector('input#fimInp').value);
let passo = Number(document.querySelector('input#passoInp').value);

let res = document.querySelector('div#resposta');


res.innerHTML = '';
if (inicio >= 0 && passo != 0) {
for (let c = inicio; c <= fim; c+=passo) {
    res.innerHTML += `${c} 👉`;
 
}}else if (passo < 0 && inicio < fim) {
    for (let c = fim; c >= inicio; c-=passo)
        res.innerHTML += `${c} 👉`;
}else {
    alert('Digite Valores Validos!')
}
    res.innerHTML += '🏁'
}

let $cú = 'cu'
console.log($cú)