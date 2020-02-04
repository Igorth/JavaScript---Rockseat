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

var listElement = document.querySelector('#git ul')
var inputElement = document.querySelector('#git input');
var buttonElement = document.querySelector('#git button');
loading();
function textoRepos() {
    var textInput = inputElement.value;    
    axios.get('https://api.github.com/users/' + textInput + '/repos')
    .then(function(response){
        buscaRepos(response.data);
    })
    .catch(function(error){
        console.warn(error);
    });
}

function buscaRepos(repositorios){
    for (const repos of repositorios) {
        var reposName = document.createTextNode(repos.name);
        var createList = document.createElement('li')

        createList.appendChild(reposName);
        listElement.appendChild(createList);
    }
}

function loading(loading){
    var textLoading = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');
    loadingElement.appendChild(textLoading);
    listElement.appendChild(loadingElement);
}