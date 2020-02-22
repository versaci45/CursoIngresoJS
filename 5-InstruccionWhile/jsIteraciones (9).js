function mostrar()
{
	// declarar variables
	var salir
	var minimo
	var maximo
	var numero
	var flag =0

	do
		{
	numero = parseInt(prompt("ingrese un numero"))
		while (isNaN(numero)) {
			numero = parseInt(prompt("no es un numero ,ingrese un numero"))
		}
		if (flag == 0 ||numero > maximo){
			maximo = numero
		}
		if (flag == 0 || numero < maximo){
			minimo = numero
			flag =1
		}
	 salir = prompt("desea salir, ingrese si")
	}while(salir != "si");

document.getElementById("maximo").value = maximo
document.getElementById("minimo").value = minimo



}//FIN DE LA FUNCIÓN