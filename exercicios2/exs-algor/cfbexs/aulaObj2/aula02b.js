class Carro {
    constructor (pMarca, pTipo ) {
        this.marca = pMarca;
        if (pTipo == 1) {
            this.tipo = 'Esportivo';
            this.velmax = 300;
        } else if (pTipo == 2) {
            this.tipo = 'Utilitário';
            this.velmax = 100;
        } else if (pTipo == 3) {
            this.tipo = 'Passeio';
            this.velmax = 160
        } else {
            this.tipo = 'Militar';
            this.velmax = 200
        }
    }

    getInfo() {
        return [this.marca, this.tipo, this.velmax]
    }

    info() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Tipo: ${this.tipo}`);
        console.log(`Vel. Max: ${this.velmax}`);
        console.log('-------------------------');
        return
    }
}

let c1 = new Carro('Mustang', 1)
let c2 = new Carro('Chevrolet', 3)
let c3 = new Carro('Gurgel', 2)

console.log(c1.info());
