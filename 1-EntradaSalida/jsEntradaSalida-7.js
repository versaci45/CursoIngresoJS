/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()
{	
    var numero1;
    var numero2;
    var suma;
    numero1 = parseInt(document.getElementById("numeroUno").value);
    numero2 = parseInt(document.getElementById("numeroDos").value);
suma = numero1 + numero2;
    alert ("la suma tiene de resultado " + suma);
    
}
function restar()
{
    var numero1;
    var numero2;
    var resta;
    numero1 = parseInt(document.getElementById("numeroUno").value);
    numero2 = parseInt(document.getElementById("numeroDos").value);
resta = numero1 - numero2;
    alert ("la resta es " + resta);
}

function multiplicar()
{ 
    var numero1;
    var numero2;
    var por;
    numero1 = parseInt(document.getElementById("numeroUno").value);
    numero2 = parseInt(document.getElementById("numeroDos").value);
por = numero1 * numero2;
    alert ("la multiplicacion es " + por);

}

function dividir()
{
    var numero1;
    var numero2;
    var div;
    numero1 = parseInt(document.getElementById("numeroUno").value);
    numero2 = parseInt(document.getElementById("numeroDos").value);
div = numero1 / numero2;
    alert ("la division tiene es " + div);
}

