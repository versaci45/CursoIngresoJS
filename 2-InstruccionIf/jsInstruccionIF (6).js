function mostrar()
{
//tomo la edad  
var dato;
dato = parseInt(document.getElementById("edad").value);

if (dato < 13 ) 
{
      alert("la persona  es un niño");
}
else if (dato <= 17) 
{
      alert("la persona  es adolecente");
}
else
{
alert("la persona es mayor de edad");


}




}//FIN DE LA FUNCIÓN