// Objeto

const Pessoa = {
    nome: 'Diego',
    idade: 21,
    getNome:function(){
        return this.nome;
    },
    getIdade:function(){
        return this.idade;
    },
    setNome:function(nome){
        this.nome = nome;
    },
    setidade:function(idade){
        this.idade=idade;
    }

};

// Elementos
const btnCalc = document.querySelector('#calc');
const res = document.querySelector('#res');
const inpNome = document.querySelector('#name1');
const inpIdade = document.querySelector('#age1');

// Funções
const addDados = (() => {
    res.innerHTML = '';
    const div = document.createElement('div');
    
        div.setAttribute('class', 'person');
        div.innerHTML = `Nome: ${Pessoa.getNome()} <br/>Idade: ${Pessoa.getIdade()}`;
        res.appendChild(div);
        
    })
    

btnCalc.addEventListener('click', () => {
    Pessoa.setNome(inpNome.value);
    Pessoa.setidade(inpIdade.value)
    inpNome.value ='';
    inpIdade.value = '';
    addDados();
})

/*Pessoa.nome = 'diego'
const p3 = Pessoa

Pessoa.setNome("cumazinho");
Pessoa.setidade(21)

console.log(Pessoa) */

