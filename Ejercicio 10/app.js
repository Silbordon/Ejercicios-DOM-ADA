//Ejercicio 10

// paises
// En un documento html crear una lista desordenada con distintos paises de cada continente (entre 2 y 4 por continente). Hacer un programa que al iniciarse pregunte mediante un prompt por un continente y destaque en rojo y en negrita aquellos paises de dicho continente.

const continente = prompt('Ingresa un continente').toLowerCase();


let paisIngresado = document.getElementsByClassName(continente);
paisIngresado[0].classList.add('destacar');
paisIngresado[1].classList.add('destacar');
paisIngresado[2].classList.add('destacar');

