//RECURSIVIDADE
function fatorial(n) {
    if(n == 1){
        return 1                    //essa função representa que, caso o n n seja um 1, ele será multiplicado e depois ele perderá a um 
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))