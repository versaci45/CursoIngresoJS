function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero=0;
	var salir="si";
	
	alert("hola")
	do{

	numero = parseInt(prompt ("ingrese un numero"));
		while( isNaN(numero)){
		numero = parseInt(prompt("eso no es un numero, ingrese un numero"))
		}
	acumular = numero +acumulador
	contador ++	
	salir = prompt("quiere salir?, ingrese si")
}while(salir != "si");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN