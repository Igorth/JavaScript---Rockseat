// 1 EXERCICIO 

class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        if(this.admin === true){
            return true;
        } else{
            return false;
        }
    }
}


class Admin extends Usuario{
    constructor(){
        super();
        this.admin = true;
    }
}



const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

const adm2 = new Admin('teste@tetste.com', '123123');
console.log(adm2.isAdmin());



// 2 EXERCICIO

const usuarios = [
    { nome: "Igor", idade: 23, empresa: "Rocketseat"},
    { nome: "laisa", idade: 15, empresa: "Rocketseat"},
    { nome: "lfds", idade: 30, empresa: "bora"},
];

const idades = usuarios.map(function(item){
    return item.idade;
})

console.log(idades);


const filter = usuarios.filter(function(item){
    return item.idade >=18 && item.empresa === "Rocketseat"
})

console.log(filter)


const find = usuarios.find(function(item){
    return item.empresa === "Google";
})
console.log(find);


const mult = usuarios.map(item => ({...item, idade: item.idade * 2}))
    .filter(item => item.idade <= 50)

console.log(mult)



// 3 EXERCICIO

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
    return item + 10;
});

const mapa = arr.map(item => item + 10);

console.log(mapa)


// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade(usuario) {
 return usuario.idade;
}

const mostraIdades = usuario => usuario.idade;


console.log(mostraIdades(usuario));


// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}

const mostraUsuarios = (nome = 'Diego', idade = 18) => ({nome, idade});

console.log(mostraUsuarios(nome, idade));
console.log(mostraUsuarios(idade))


// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve();
    })
   }

const promises = () => new Promise(resolve, reject => resolve());

console.log(promises);

