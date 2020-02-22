function mostrar() {

	var flag = 0;
	var positivo = 0;
	var negativo = 1;
	var numero;
	var respuesta = 'si';

	do {
		numero = parseInt(prompt("ingrese un numero"));
		while (isNaN(numero)) {
			numero = parseInt(prompt("no es un numero ,ingrese un numero"))
		}if (numero >= 0) {
			positivo = positivo + numero
		} else {
			alert(numero)
			negativo = negativo * numero
			flag = 1
		}
		respuesta = prompt("quiere salir?");
	} while (respuesta = "si");

	if (flag == 0) {
		negativos = 0
	}
	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN