var resultado = document.querySelector('#resultado');
var confirmar = document.querySelector('#confirmar');

function insert(num) {
    resultado.innerHTML += num;
}

function apagar() {
    resultado.innerHTML = '';
}

function deletar() {
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1);
    }
}

function confirm() {
    if(resultado.textContent)
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML);
}