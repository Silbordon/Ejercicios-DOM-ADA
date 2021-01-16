// Ejercicio 11

// comidas
// En un documento html agregar imágenes de comidas, postres y bebidas (3 o 4 de cada uno). Dar estilos para que se muestren una al lado de la otra, que tengan algo de espacio con margenes y que tengan el mismo tamaño. Hacer un programa que al iniciarse pregunte mediante un prompt qué se desea ver (comidas, postres o bebidas) y mostrar sólo las imágenes de la categoría correspondiente.

const alimento = prompt('Ingrese que desea ver: comidas, bebidas o postres').toLowerCase();

const eleccion = document.getElementsByClassName(alimento);
eleccion[0].classList.remove('display-none');