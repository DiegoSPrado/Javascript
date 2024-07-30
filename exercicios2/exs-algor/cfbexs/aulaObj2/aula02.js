class Carro {
    constructor (pInstrum, pTipo) {
        this.instrm = pInstrum;
        switch (pTipo) {
            case 1: 
                this.tipo =  'Corda';
            break;
            case 2:
                this.tipo = 'Sopror'
                break;
            case 3:
                this.tipo = 'Percussão'
        }  

    }
}