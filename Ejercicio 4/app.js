// imagen
// Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

// Opción elegida	Ancho de imagen
// chica	200px
// mediana	500px
// grande	800px



const tamanioImagen = prompt('Ingresa el tamaño que quieras');

const imagen = document.getElementById('imagen');

const chica = 200;
const mediana = 500;
const grande = 800;

const imagenChica = () => imagen.style.width = `${chica}px`;
const imagenMediana = () => imagen.style.width = `${mediana}px`;
const imagenGrande = () => imagen.style.width = `${grande}px`;


const cambioTamanio = () => {
    if (tamanioImagen === 'chica'){
        return imagenChica();
    } else if (tamanioImagen === 'mediana') {
        return imagenMediana();
    } else if (tamanioImagen === 'grande') {
        return imagenGrande();
    } else {

    }
}

cambioTamanio();



//Solucion Jonh
// let tamaño = prompt('Ingresa el tamaño de la imagen (Grande, Mediana, Pequeña)').toLowerCase();
// const demo = document.getElementById('demo');

// const changeWidth = tamaño =>{
//   if(tamaño === 'grande' || tamaño === 'mediana'|| tamaño === 'pequeña'){
//     if(tamaño === 'grande'){
//       tamaño = 800
//     } else if(tamaño === 'mediana'){
//       tamaño = 500
//     } else if(tamaño === 'pequeña'){
//       tamaño = 200
//     }
//     demo.innerHTML= `<img src="./lou.jpg" alt="Lost Of Us II" width=${tamaño}px>`;
//   } else {
//     // demo.innerHTML = 'Ingresa un tamaño valido';
//     alert('Ingresa un tamaño valido');
//   }
// };

// changeWidth(tamaño);

















