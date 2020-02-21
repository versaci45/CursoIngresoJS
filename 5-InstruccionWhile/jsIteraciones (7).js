function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero=0;
	var salir=si;
	numero = parseFloat(prompt ("ingrese un numero"))
	

	while (salir = "si"){
		
		acumulador = numero + acumulador
		
		numero = parseFloat(prompt ("ingrese otro numero, para terminar ingrese 00"))
		
		contador = contador + 1
	
	
	}
	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN