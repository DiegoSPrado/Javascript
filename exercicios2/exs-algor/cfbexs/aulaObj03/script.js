class Pessoa {
    constructor (pNome, pIdade) {
        this.nome = pNome;
        this.idade = pIdade;
    }
    setNome(nome){
        this.nome = nome;
    };
    setIdade(idade) {
        this.idade=idade;
    };
    getNome(){
        return this.nome;
    };
    getIdade(){
        return this.idade
    }
    
    info() {
        console.log(`Nome: ${this.idade}`);
        console.log(`Idade: ${this.idade}`);
    };

};

let pessoas = []

const btnAdd = document.querySelector('#calc');
const res = document.querySelector('#res');

const addPessoaDiv = () => {
    res.innerHTML ='';
    pessoas.map((p) => {
        const div = document.createElement('div');
        div.setAttribute("class", "pessoa"); 
        div.innerHTML += `Nome: ${p.getNome()} <br/>Idade: ${p.getIdade()} `
        res.appendChild(div)
    });
    

};

btnAdd.addEventListener('click', (evt) => {
    const n = document.querySelector('#name1')
    const age = document.querySelector('#age1')
    let p = new Pessoa(n.value, age.value)
    pessoas.push(p)
    n.value = '';
    age.value = '';
    addPessoaDiv();
    n.focus();
    //console.log(pessoas)
});
