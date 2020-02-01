// Exercicio 1


        // Criar um quadro quando clicar no botao click here
        var btnElement = document.getElementById('botao');
        var testElement = document.getElementById('square')
        btnElement.onclick = function(){
        var newElement = document.createElement('div');
        newElement.style.width = '100px';
        newElement.style.height = '100px';
        newElement.style.backgroundColor = '#f00';
        newElement.style.margin = '30px';

        testElement.appendChild(newElement);

        // Muda a cor do quadrado quando passar o mouse em cima
        document.getElementById("square").onmouseover = function(){            
            newElement.style.backgroundColor = getRandomColor();
        }        
        }

        function getRandomColor() {
            var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
            var newColor = getRandomColor(); // #E943F0


        // Criar uma lista com um vetor e logo ir adicionando conteudo com o input
        var nomes = ['Igor', 'Laisa', 'IgLa'];
        var listElement = document.querySelector('#app ul');
        var inputElement = document.querySelector('#app input');
        var buttonElement = document.querySelector('#app button');
        
        function agruparTudo() {
            listElement.innerHTML = '';
            for (const nome of nomes) {
            var ordemElement = document.createElement('li');
            var nomeText = document.createTextNode(nome);
            ordemElement.appendChild(nomeText);
            listElement.appendChild(ordemElement);
            
        }
        }        

        function adicionar(){
            var textInput = inputElement.value;
            nomes.push(textInput);
            inputElement.value = '';
            agruparTudo();
            console.log(nomes);
        }
} 