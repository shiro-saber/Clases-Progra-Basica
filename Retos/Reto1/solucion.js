
let userAnswer = prompt("Elige 1 para ordenar alfabeticamente, elige 2 para convertir a mayúsculas");

// Decides which function it's going to be called
switch (userAnswer)
{
	case "1":
  	orderAlphabetically();
  	break;
   
	case "2":
  	convertToUpper();
  	break;
    
   default:
   	console.log("Opción no válida");
    break;
}


/*
 * This function asks the user for a word and 
 * orders the characters alphabetically
 */
function orderAlphabetically()
{
	/*
   * Separamos el string en caracteres para poder hacer el ciclo con la funcion .split('').
   * Creamos una variable temporal que nos va a ayudar a tener el valor de la letra mas cercana al comienzo del abecedario.
   * Recorremos dos veces los caracteres, la primera, es la letra que estamos comparando y la segunda es para comparar con las siguientes letras.
   * Comparamos si la letra que tengo asignada es mayor o menor a la siguiente, en caso de que sea mayr, vamos a la siguiente letra y seguimos comparando, hasta terminar la comparación y elegir que letra va en esta posición del arreglo
   */
  
  let word = prompt("Escribe la palabra a ordenar");
  
  // Creates an array with each of the characters
  let characters = word.split('');
  let tmp;
  
  for(let i = 0; i < characters.length; i++) {
    for(let j = i + 1; j < characters.length; j++) {
    	// Checks if the character is later 
      if(characters[i] > characters[j])
      {
        tmp = characters[i];
        characters[i] = characters[j];
        characters[j] = tmp;
      }
    }
  }

  console.log(characters.join(''));
  
  // console.log(word.split('').sort().join(''))
}

/*
 * This function asks the user for a word and 
 * prints it in upper case
 */
function convertToUpper()
{
	
  let word = prompt("Escribe la palabra a volver en mayúsculas");
  
  console.log(word.toUpperCase());
}
