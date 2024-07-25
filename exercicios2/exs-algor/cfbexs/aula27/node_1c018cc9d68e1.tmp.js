function* loop() {
    let c = 0;
    while (true) {
        c++
    }
}

const giro = loop()

for (let c of giro) {
    console.log(c)
    if (c === 10) break;
    
}