// Ejercicio 12

// busqueda
// En un documento html crear una lista desordenada con al menos 10 items que consistan en oraciones, frases o citas. Hacer un programa que al iniciarse pregunte mediante un prompt por una palabra y destaque en rojo y en negrita aquellos items de la lista cuyo texto contenga dicha palabra.

const lista = document.getElementsByTagName('li');
const palabra = prompt('Busca una palabra');



for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    element.innerText.toLowerCase().includes(palabra.toLowerCase()) ? element.classList.add('destacar') : null
}



// for (const index of lista) {
//   index.innerText.toLowerCase().includes(palabra.toLowerCase()) ? index.classList.add('cambios') : null
// }


// const array = Array.from(lista);
// array.forEach( index => index.innerText.toLowerCase().includes(palabra.toLowerCase()) ? index.classList.add('cambios') : null);

