// Exercicio 1 check age
function checkAge(age) {
    return new Promise(function(resolve, reject){
        if (age >= 18){
            resolve()
        } else{
            reject()
        }
    })
}

checkAge(12)
    .then(function(){
        console.log('Maior que 18');
    })
    .catch(function(){
        console.log('Menor que 18');
    });


// Exercicio 2

var inputElement = document.querySelector('#git input');
var buttonElement = document.querySelector('#git button');
var text = inputElement.value;

buttonElement.onclick = function(repositorio) {
    var urlText = 'https://api.github.com/users/' + repositorio + '/repos'
    return urlText;
}

var catchText = buttonElement.onclick(text);
console.log(catchText)