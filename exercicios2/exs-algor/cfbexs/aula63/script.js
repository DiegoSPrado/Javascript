// Elementos
let radComum = document.querySelector('#TipoCom');
let radMilitar = document.querySelector('#TipoMil');
let inpBlindg = document.querySelector('#iBlin');
let inptMunicao = document.querySelector('#iMun');

const btnAdd = document.querySelector('#adicionar');
const iModelo = document.querySelector('#iModelo');
const iPortas = document.querySelector('#iPortas');
const res = document.querySelector('#carrosdiv')
let a_carros = []

const excluirCarro=(quem)=>{
    a_carros=a_carros.filter((el)=>{
        return el.nome!=quem
    })
}

//Habilitar Inputs 
radMilitar.addEventListener('click', () => {
    inpBlindg.removeAttribute('disabled');
    inptMunicao.removeAttribute('disabled')
});

radComum.addEventListener('click', () => {
    inpBlindg.value = 0;
    inptMunicao.value = 0;
    
    inpBlindg.setAttribute('disabled', 'disabled');
    inptMunicao.setAttribute('disabled', 'disabled')
    
});


//Criando a div
const addCarrodiv = () => {
    res.innerHTML = '';
    a_carros.forEach((c) => {
        const div = document.createElement('div');
        const btnExcl = document.createElement('button'); 
        btnExcl.innerHTML = 'Excluir Carro';
        
        div.setAttribute("class", "carro");
        btnExcl.setAttribute("class", "btnExcluir");
        div.innerHTML += `Modelo: ${c.modelo}<br/>`;
        div.innerHTML += `Portas: ${c.porta} <br/>`;
        div.innerHTML += `Blindagem: ${c.blindagem} <br/>`;
        div.innerHTML += `Munição: ${c.municao}`;
        div.appendChild(btnExcl);
        res.appendChild(div);

    });
};

// Adicionar Veiculos
btnAdd.addEventListener('click', () => {
    if(iModelo.value && iPortas.value == null){
        return (
            window.alert('ERRO[Digite o nome e a quantidade de portas]')
        )
    }else {
    
    if(radComum.checked){
    let car = new Carro(iModelo.value, iPortas.value)
    a_carros.push(car)
}else {
    let car = new Militar(iModelo.value, iPortas.value, inpBlindg.value, inptMunicao.value)
    a_carros.push(car)
}
    addCarrodiv();
    iModelo.value = '';
    iPortas.value = '';
    iModelo.focus()
}
});


class Carro {
    constructor(pModelo, pPortas) {
        this.modelo = pModelo;
        this.porta = pPortas;
    };
    setModelo = function(modelo){
        this.modelo = modelo;
    };
    setPorta = function(porta) {
        this.porta = porta;
    };
    getModelo = function(){
        return this.modelo;
    };
    getPortas = function(){
        return this.porta;
    };
};

class Militar extends Carro {
    constructor(pModelo, pPortas, pBlindagem, pMunicao){
        super(pModelo, pPortas);
        this.blindagem = pBlindagem;
        this.municao = pMunicao;
    };
    setBlindagem = function(blindagem){
        this.blindagem = blindagem;
    };
    setMunicao = function(municao) {
        this.municao = municao;
    };
    getBlindagem = function(){
        return this.blindagem;
    };
    getMunicao = function(){
        return this.municao;
    };
};

