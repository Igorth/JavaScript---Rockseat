// Exercicio 1

var btnElement = document.getElementsByClassName('botao');
btnElement.onclick = function(){
    var newElement = document.createElement('div');
    newElement.style.width = '100px';
    newElement.style.height = '100px';
    newElement.style.color = 'red';
} 