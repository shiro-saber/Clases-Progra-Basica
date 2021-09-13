var mes = prompt("Escribe 1 para: Ordenar tu palabra en orden alfabético. Y escribe 2 para: Regresar tu palabra en mayúsculas")

if (mes == 1) 
{
    var str = prompt("Dame una palabra")

    str = str.split ('');
    str.sort()
    str = str.join('');
    console.log(str)
}

else (mes == 2)
{
    var mayus = prompt("Dame una palabra")

    console.log( mayus.toUpperCase() )
}
