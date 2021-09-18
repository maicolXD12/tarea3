var anio = parseInt (prompt ("Ingrese el año "))  
if (anio %4==0 && anio %100!=0)
{ 
var info1 =  "El año es un año bisiesto" + anio;
console.log ("el año es bisiesto")
}
else if (anio%400==0)
{  
var info2 =  "El año es un año bisiesto" + anio;
console.log ("el año es bisiesto") 
}  
else
{  
var info3 = "El año no es bisiesto" + anio;
console.log ("el año no es bisiesto")
}