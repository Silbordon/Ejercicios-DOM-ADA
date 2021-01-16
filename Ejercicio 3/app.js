// rgb
// Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

const colorRed = prompt('Ingrese valores correspondiente al rojo (0-255)');
const colorGreen = prompt('Ingrese valores correspondiente al verde (0-255)');
const colorblue = prompt('Ingrese valores correspondiente al azul (0-255)');

const chageColor = (colorRed, colorGreen, colorblue) => document.body.style.backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorblue})`;

chageColor(colorRed, colorGreen, colorblue);