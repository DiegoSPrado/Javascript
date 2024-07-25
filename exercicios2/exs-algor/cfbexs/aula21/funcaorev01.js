function parImpar() {
    let n1 = 34;
    let n2 = 4;
    let res = n1 * n2;
    if (res % 2 == 0) {
        return 'O número é par';
    } else {
        return 'O número é ímpar';
    }
} 

let res = parImpar();

console.log(res);


