"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
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
*/
// EXERCICIO 4
//4.1 Desestruturação simples
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC
//4.2 Desestruturação em parâmetros

function mostraInfo(usuario) {
  return "".concat(usuario.nome, " tem ").concat(usuario.idade, " anos.");
}

mostraInfo({
  nome: 'Diego',
  idade: 23
});

function mostraInfos(_ref) {
  var nome = _ref.nome,
      _ref$endereco = _ref.endereco,
      cidade = _ref$endereco.cidade,
      estado = _ref$endereco.estado;
  return "".concat(nome, " tem ").concat(cidade, " anos.");
}

console.log(mostraInfos(empresa)); //5.1 REST

var arr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log(x); // 1

console.log(y); // [2, 3, 4, 5, 6]
//5.2 SPREAD

var usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuario, {
  nome: "Gabriel"
});

var usuario3 = _objectSpread({}, usuario, {
  endereco: {
    cidade: "Lontras"
  }
});

console.log(usuario2);
console.log(usuario3);
