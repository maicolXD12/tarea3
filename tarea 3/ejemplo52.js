let arreglo = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]
let color = prompt("Ingrese un color")
let validacion = false;

for(let i =0; i < arreglo.length;i++)
{
    if(arreglo[i] == color)
    {
        validacion =true       
    }  

}

if(validacion==true)
{
    console.log("El color existe en el arreglo")
}
else
{
    console.log("El color no existe en el arreglo")
}