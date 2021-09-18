
function numero()
{
let num1= prompt("Ingrese un numero ");
let num2= prompt("Ingrese un numero ");    

if (parseInt(num1)> parseInt(num2))

{
    return num1
   
    
}
else if (parseInt(num1)< parseInt(num2))
{
    return num2
    
}
else
{
    alert("numeros iguales")
}

}
alert("el numero mayor es " + numero())