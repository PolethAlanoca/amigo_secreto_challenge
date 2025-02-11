// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo (){
    let input = document.getElementById("amigo");
    let amigo = input.value.trim();
    if (amigo == "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    amigos.push(amigo);
    asignarTextoElemento();
    input.value ="";
}

function asignarTextoElemento() {
    let elementoHTML = document.getElementById("listaAmigos");
    elementoHTML.innerHTML = "";
    amigos.forEach(elemento => {
        let li = document.createElement("li");
        li.textContent = elemento;
        elementoHTML.appendChild(li);
    });       
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }
    let indice = Math.floor(Math.random() * amigos.length);
    document.getElementById("resultado").textContent = "El amigo secreto es: " + amigos[indice];
    amigos = [];
    asignarTextoElemento();
}