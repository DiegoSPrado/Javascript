class Carro { // Classe Pai / Base
    constructor(pModelo, pPortas) {
        this.modelo = pModelo;
        this.portas = pPortas;
        this.ligado = false;
        this.vel = 0;
        this.cor = undefined;
    };
    ligar=function(){
        this.ligado = true;
    };
    desligado=function(){
        this.ligado = false;
    };
    setCor=function(cor){
        this.cor = cor
    }
};


class Esportivo extends Carro {    // Classe Filho
    constructor(pModelo, pPortas, pVelmax, pMontadora){
        super(pModelo, pPortas);
        this.velmax = pVelmax;
        this.montadora = pMontadora;
    }
}


let c1 = new Carro('Subaru', 4);
c1.setCor('Branco')
let c2 = new Esportivo('Mustang GT', 2, 250, 'Ford')
c2.ligar()


console.log(`Modelo: ${c1.modelo}`);
console.log(`Portas: ${c1.portas}`);
console.log(`Ligado: ${c1.ligado?'Sim':'Não'}`);
console.log(`Velocidade: ${c1.vel}`);
console.log(`Cor: ${c1.cor}`);
console.log('--------------------')

console.log(`Modelo: ${c2.modelo}`);
console.log(`Portas: ${c2.portas}`);
console.log(`Montadora: ${c2.montadora}`)
console.log(`Ligado: ${c2.ligado?'Sim':'Não'}`);
console.log(`Velocidade: ${c2.vel}`);
console.log(`Montadora: ${c2.montadora}`)
console.log(`Cor: ${c2.cor}`);
console.log('--------------------')