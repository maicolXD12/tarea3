const guardado = []; 
class vehiculo

{
    constructor(marca,modelo,annio)
    
    {
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    }

}


function creacion(numeros) 
{
    for(let x = 0; x < numeros; x++)
    {
        let marca = prompt("Ingrese la marca del vehiculo: ")
        let modelo = prompt("Ingrese el modelo del vehiculo: ")
        let annio = prompt("Ingrese el annio del vehiculo: ")
        const carro = new vehiculo(marca,modelo,annio); 
        guardado.push(carro); 

    }
    
}
function imprimir(arreglo) 
{
    for(let i = 0; i < arreglo.length; i++)
    {
        console.log(arreglo[i]);
    }
    
}


creacion(10);
imprimir(guardado);