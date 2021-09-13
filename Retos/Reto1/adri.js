var opcion = prompt("Elige funcionalidad MAY o ALFA, SOLO ESO NO SE PONGAN CREATIVOS!");
var palabra = prompt("Cual es tu palabra?");

if(opcion=="MAY")
{
    console.log(palabra.toUpperCase());
}
else
{
	  var palabra_array = palabra.split('');
	  var ordenado = palabra_array.sort();
	  console.log(ordenado);
}
