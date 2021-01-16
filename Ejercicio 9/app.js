
//Ejercitacion en Grupo

// animales
// En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.

const animal = prompt('Ingrese que animal desea ver, sus opciones son : perro, gato, conejo');

const perroSalchicha = document.getElementById('salchicha');
const gato = document.getElementById('gato');
const conejo = document.getElementById('conejo');



const animalElegido = (animal) => {
    if (animal === 'perro'){
gato.classList.add('display-none');
conejo.classList.add('display-none');
    } else if (animal === 'gato'){
        perroSalchicha.classList.add('display-none');
        conejo.classList.add('display-none');
    }  else if (animal === 'conejo'){
        perroSalchicha.classList.add('display-none');
        gato.classList.add('display-none');
    } else{
        return 'la opcion ingresada no es valida'
    }
};

animalElegido(animal);

