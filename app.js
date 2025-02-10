// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo (amigo){
    let amigo = document.getElementById("amigo");
    amigos.push(amigo);
    asignarTextoElemento("ul", amigos);
}

function asignarTextoElemento(elemento, lista) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = lista;
    return;
}