
// const temperatura = prompt('Ingrese aquí la temperatura');

// let color = 'blue' 
// if (temperatura<0){
//      color='blue'
// }
// else if (temperatura >=0 && temperatura < 15){
//    color= 'ligthblue'
// }else if (temperatura >=15 &&temperatura <25){
//     color= 'green'
// }
// else if (temperatura >=25 &&temperatura <30)
// {
//     color= 'yellow'
// }
// else if (temperatura >=30 &&temperatura <35){
//     color= 'orange'
// }
// else if (temperatura >= 35)
// {
//     color= 'red'
// };

// document.getElementById('root').style.color=color




// temperatura
// Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

// Temperatura	Color
// Menor a 0°	Azul
// Mayor o igual a 0° y menor a 15°	Celeste
// Mayor o igual a 15° y menor a 25°	Verde
// Mayor o igual a 25° y menor a 30°	Amarillo
// Mayor o igual a 30° y menor a 35°	Naranja
// Mayor a 35° 	Rojo


const temperatura = prompt('Ingrese una temperatura');

const color = document.getElementById('color');

const changeColor = (temperatura) => {
    if (temperatura < 0){
        color.style.color = 'blue';
    } else if (temperatura >= 0 && temperatura < 15){
        color.style.color = 'cyan';
    } else if (temperatura >= 15 && temperatura < 25){
        color.style.color = 'green';
    } else if (temperatura >= 25 && temperatura < 30){
        color.style.color = 'yellow';
    } else if (temperatura >= 30 && temperatura < 35){
        color.style.color = 'orange';
    } else if (temperatura >= 35){
        color.style.color = 'red';
    } else{
        return alert('Ingresa un valor');
    }
};

changeColor(temperatura);