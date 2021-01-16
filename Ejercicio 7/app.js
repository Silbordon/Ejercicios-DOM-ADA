//Ejercicio 7

// reacciones
// En un documento html hacer un post de una red social que contenga:

// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad
// Dar estilos para que la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius

// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes

const primera = prompt('Ingrese cantidad de reacciones para me gusta');
const segunda = prompt('Ingrese cantidad de reacciones para Me encanta');
const tercera = prompt('Ingrese cantidad de reacciones para me asombra');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

const changeReact = (primera, segunda, tercera) => {
    one.innerHTML= `😍${primera}`;
    two.innerHTML = `🤗${segunda}`;
    three.innerHTML = `😲${tercera}`;

};

changeReact(primera, segunda, tercera);
