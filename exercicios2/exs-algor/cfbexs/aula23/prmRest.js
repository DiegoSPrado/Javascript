function soma(...values) {
    let tam = values.length
    let res =0
    for (i=0;i<tam;i++) {
        
        res+=values[i]
    }
    return res;
}

//console.log(soma(1, 2, 3, 4, 5)) 

function add(...valores) {
    let res = 0
    for (let v of valores) {  // nesse loop a var V recebeu os valores de valores, e percorrerá ela toda e cada valor sera adiocionado na var res
        res += v
    }
    return res
}

console.log(add(1, 2, 3, 4, 5))