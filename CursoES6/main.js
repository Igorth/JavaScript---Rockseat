class List{
    constructor(){
        this.data = []
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.usuario = 'Igor';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById('novoTodo').onclick = function(){
    MinhaLista.add('Novo Tudo');
}

MinhaLista.mostraUsuario();




class Matematica{
    static soma(a, b){
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));


// OPERACOES EM ARRAY

const arr = [1, 3, 4, 5, 8, 9];

const newArr = arr.map(function(item, index){
    return item * index;
})

console.log(newArr);


const sum = arr.reduce(function(total, next){
    return total + next
})

console.log(sum);


const filter = arr.filter(function(item){
    return item % 2 === 0;
})

console.log(filter)


const find = arr.find(function(item){
    return item === 2;
})
console.log(find)

//////////////////////////////////



// ARROW FUNCTIONS

const arra = [1, 3, 4, 5, 6];

const newArra = arra.map(item => item * 2);

console.log(newArra)



// VALORES PADRAO

function soma(a = 3, b = 6){
    return a + b;
}

console.log(soma());
console.log(soma(1));

const somaa = (a = 3, b = 1) => a + b;
console.log(somaa());


// DESESTRUTURACAO DE OBJETO

const usuario = {
    nome: "igor",
    idade: 23,
    endereco: {
        cidade: "que",
        estado: "nz",
    },
};

console.log(usuario);

const { nome, idade, endereco: { cidade} } = usuario
console.log(nome);
console.log(idade);
console.log(cidade);

function mostraNome({nome, idade, endereco:{cidade}}){
    console.log(nome, idade, cidade);
}
mostraNome(usuario);



// REST - pegar o resto das propriedades

const usuarios = {
    name: "igor",
    idade: 32,
    empresa: "testeteste"
}

const { name, ...resto } = usuarios;

console.log(name);
console.log(resto);


const arrr = [1, 2, 3, 4];
const [a, b, ...c] = arrr;

console.log(a);
console.log(b);
console.log(c);


function sub(...params){
    return params.reduce((total, next) => total + next);
}
console.log(sub(1, 3, 4));



// SPREAD operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2];
console.log(arr3);


const usuario1 = {
    nome: "igor",
    idade: 32,
    empresa: "teste"
}

 const usuario2 = { ...usuario1, nome: "Laisa"};
 console.log(usuario2);



 // TEMPLATE LITERALS

 const nome1 = "igor";
 const idade1 = 23;

 console.log('Meu nome é ' + nome1);

 console.log(`Meu nome é ${nome1}`)


 // OBJECT SHORT SYNTAX
 const nome2 = "laisa";
 const idade2 = 12;

 const usuario3 = {
     nome2,
     idade2,
     empresa: "entrega",
 }

 console.log(usuario3);