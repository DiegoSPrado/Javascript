const f = function(...valores) {
    let res = 0;
    for (let v of valores) {
        res += v;
    }
    return res;
}

//console.log(f(2, 5, 34, 6))

const anom = new Function("v1", "v2", "v3", "return v1 + v2 + v3") // Função Anônima

console.log(anom(2, 4 , 6))