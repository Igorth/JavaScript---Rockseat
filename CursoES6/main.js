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