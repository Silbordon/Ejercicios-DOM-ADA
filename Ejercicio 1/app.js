
// let nombre = prompt('Ingrese su nombre');


// const saludo = document.getElementById('saludo');
//  const contentSaludo = `Hola soy  ${nombre}`;
//  saludo.classList.add('titulo');

// saludo.innerHTML = contentSaludo;

//Otra forma de hacerlo
let nombre = prompt('Ingrese su nombre');

const demo = document.getElementById('saludo');

const saludo = nombre => demo.innerHTML = `<h1 class="titulo"> Hola ${nombre}`;

saludo (nombre);