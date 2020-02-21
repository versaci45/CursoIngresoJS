function mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
while( numero >= 9 || numero <= 0 || isNaN(numero)){

	numero = parseInt(prompt("el numero no esta entre los valores deseados"))
}
document.getElementById("Numero").value = numero
alert ("numero correcto")

}//FIN DE LA FUNCIÓN