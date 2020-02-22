function mostrar()
{

var sexo = prompt("ingrese f ó m .").toLowerCase;


while (!( sexo == "f"|| sexo == "m"))
{
        sexo = prompt("letra incorrecta, reingrese sexo.")
    
}
alert ("sexo ingresado" );
document.getElementById("Sexo").value = sexo
}//FIN DE LA FUNCIÓN