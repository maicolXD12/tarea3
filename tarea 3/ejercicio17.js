let tamanio = parseInt(prompt("Ingrese la cantidad : "));
let arreglo =[];
let multiplos=[];
let ordados = arreglo.sort();
let impares=[];
let pares=[];
let primos =[];
let tiposdatos = [];
let contadornumber=0
let contadorstring=0
let contadorbool=0




function vprimos(numero) 
{
    if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	
	return true;
}




for(let i = 0; i <= tamanio; i++ )
{
    let numero = parseInt(prompt("Ingrese el numero : "));
    arreglo.push(numero);
    tiposdatos.push(typeof numero)

    if(typeof numero == "number")
    {
        contadornumber++;
    }
    if(typeof numero == "string")
    {
        contadorstring++;
    }
    if(typeof numero == "boolean")
    {
        contadorbool++;

    }
    if(numero % 2 ==0)
    {
        pares.push(numero)
    }
    if(numero % 2 != 0)
    {
        impares.push(numero);
    }
    if(vprimos(numero))
    {
        primos.push(numero);
    }
    if(numero % 4 == 0)
    {
        multiplos.push(numero);
    }

}

if(impares.length <= 0)
{
    console.log("No hay numeros impares")
}
else
{
    console.log("Impares: ")
    console.log(impares)
}

if(pares.length <= 0)
{
    console.log("No hay numeros pares")
}
else
{
    console.log("pares: ")
    console.log(pares)
}

if(primos.length <= 0)
{
    console.log("No hay numeros primos")
}
else
{
    console.log("Primos: ")
    console.log(primos)
}
console.log("En orden:: ")
console.log(ordados)
console.log("Tipos de datos: ")
console.log(tiposdatos)
console.log("Cantidad por tipo :")
console.log("Cantidad de number: " + contadornumber);
console.log("Cantidad de string: " + contadorstring);
console.log("Cantidad de bool: " + contadorbool);
if(multiplos.length <= 0)
{
    console.log("No hay multiplos de 4")
}
else
{
    console.log("Multiplos de 4: ")
    console.log(multiplos)
}