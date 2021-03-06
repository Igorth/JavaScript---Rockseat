// Exercicio 1
var endereco = {
    rua: "Rua dos Pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "Sao Paulo",
    uf: "SP"
};
function mostraInfo(objetoLido){
    console.log('O usuario mora em ' + objetoLido.cidade + ' / ' + objetoLido.uf + ', no bairro '
    + objetoLido.bairro + ', na rua ' + objetoLido.rua + ' com numero ' + objetoLido.numero + '.');
}
//mostraInfo(endereco);


// Exercicio 2
function pares(x, y){
    while(x < y){
        if(x % 2 == 0){
            console.log(x);
        }
        x++;
    }
}
//pares(32, 321);

// Exercicio 3
function temHabilidades(skills, skill){
    if(skills.indexOf(skill) >= 0 ){
        return true;
    }else{
        return false;
    }

}

var skills = ['teste', 'React', 'React Native', 'Javascript'];
var resultado = temHabilidades(skills, 'Javascript');
//console.log(resultado);

// Exercicio 4
function experiencia(anos){
    if (anos >= 0 && anos <= 1) {
        return 'Iniciante'
    } if (anos > 1 && anos < 3) {
        return 'Intermediario'
    } if (anos > 3 && anos <= 6) {
        return 'Avancado'
    } else {
        return 'Jedi Master'
    }

};

var anosEstudo = 6;
var resultado = experiencia(anosEstudo);
//console.log(resultado);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master


// Exercicio 5
var usuarios = [
    {
        nome: 'Igor',
        habilidades: ['Javascript', 'React', 'React Native']
    },
    {
        nome: 'Laisa',
        habilidades: ['Marketing', 'SEO', 'Analytics']
    }
];

for (const usuario of usuarios) {
    //console.log('O ' + usuario.nome + ' possui as habilidades: ', usuario.habilidades.join(', ') + '.');
}

//O Igor possui as habilidades: Javascript, React, React Native
//A Laisa possui as habilidades: Marketing, SEO, Analytics