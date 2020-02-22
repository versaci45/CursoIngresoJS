function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var contCero;
	var numero;
	var negativo;
	var contNeg;
	var contPos;
	var salir;
	do
	{
numero = parseInt(prompt("ingrese un numero"))
	while (isNaN(numero)) {
		numero = parseInt(prompt("no es un numero ,ingrese un numero"))
	}	
if(numero = 0){
	contCero ++
} else if( numero < 0){ 
	negativo = negativo + numero
	contNeg ++
}else {
	positivo = positivo + numero
	contPos ++
}

 salir = prompt("desea salir, ingrese si")
}while(salir != "si");


document.write(	"1-Suma de los negativos = " + negativos )
document.write(	"2-Suma de los positivos = " + positivos )
3-Cantidad de positivos. +
	4-Cantidad de negativos. +
	5-Cantidad de ceros. +
	6-Cantidad de números pares. 
	7-Promedio de positivos. 
	8-Promedios de negativos. 
	9-Diferencia entre positivos y negativos, (positvos-negativos).


}//FIN DE LA FUNCIÓN


/*function mostrar() {

	var acumuladorNegativos = 0;
	var acumuladorPositivos = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPos = 0;
	var promedioNeg = 0;
	var diferencia;
	var numero;
	var seguir;

	do {
		numero = parseInt(prompt("Ingrese un numero: "));
		while (isNaN(numero)) {
			numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
		}
		if (numero > 0) {
			//positivo
			acumuladorPositivos = acumuladorPositivos + numero;
			contadorPositivos++;

		}
		else if (numero < 0) {
			// negativo
			acumuladorNegativos = acumuladorNegativos + numero;
			contadorNegativos++;

		}
		else {
			// cero
			contadorCeros++;
		}
		//-----------------------
		if (numero % 2 == 0) {
			contadorPares++;
		}


		seguir = prompt("Quiere ingresar otro numero?");
	} while (seguir == 's');

	if (contadorPositivos != 0) {
		promedioPos = acumuladorPositivos / contadorPositivos;
	}
	if (contadorNegativos != 0) {
		promedioNeg = acumuladorNegativos / contadorNegativos;
	}
	diferencia = contadorPositivos - contadorNegativos;

	document.write("1 - Suma de los negativos: " + acumuladorNegativos + "</br>");
	document.write("2 - Suma de los positivos: " + acumuladorPositivos + "</br>");
	document.write("3 - Cantidad de positivos: " + contadorPositivos + "</br>");
	document.write("4 - Cantidad de negativos: " + contadorNegativos + "</br>");
	document.write("5 - Cantidad de ceros: " + contadorCeros + "</br>");
	document.write("6 - Cantidad de números pares: " + contadorPares + "</br>");
	document.write("7 - Promedio de positivos: " + promedioPos + "</br>");
	document.write("8 - Promedios de negativos: " + promedioNeg + "</br>");
	document.write("9 - Diferencia entre positivos y negativos: " + diferencia + "</br>");


}//FIN DE LA FUNCIÓN*/