function mostrar()
{

var mes = document.getElementById("mes").value;

switch (mes){
    case "Febrero":
        alert("si tiene 28 días");
        break;

    case "Enero":
    case "Mayo":
    case "Marzo":
    case "Julio":
    case "Agosto":   
    case "Octubre":
    case "Diciembre: ":
         alert("si tiene 31 días")
         break;

   case "Abril":
   case "Septiembre":
   case "Noviembre":        
         alert("si tiene 30 días")
         break;
 
    }



}//FIN DE LA FUNCIÓN