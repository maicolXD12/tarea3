function numero() 

{
var num= prompt("Ingrese un numero")
console.log("El numero es: "+ num)

if (num % 5 == 0)
{
    return ('El numero es divisible por 5')
}

else
{
    return ('El numero no es divisible por 5')
}
}

numero()