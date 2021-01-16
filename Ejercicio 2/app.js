// color
// Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

const color = prompt('Ingresar color (es en hexadecimal!!)');

const chanceColor = color => document.body.style.backgroundColor = `#${color}`;

chanceColor(color);
