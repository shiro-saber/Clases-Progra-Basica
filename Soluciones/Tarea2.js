/**
 * Pedir al usuario su mes de nacimiento, este puede ser número o texto, minúsculas o mayúsculas.
 *
 * Imprimir el signo zodiacal del usuario.
 *
 * Repetir el proceso “n” veces.
 */

// Se repite el proceso "n" veces, siendo "n" dos veces.
for (var i = 0; i <= 2; i++)
{
  // Se pide el mes al usuario
	var month = prompt(`Persona {i + 1} Ingresa un mes, puede ser número o texto`);
  
  // Se utiliza el switch para hacer mas entendible el código
  // asi como abarcar diferentes casos sin necesidad de procesamiento.
  // Se convierte la entrada en un string y se hace minúsculas para poder
  // abarcar el requerimiento de minúsculas y mayúsculas.
  switch (month.toString().toLowerCase())
  {
    case "1":
    case "enero":
      console.log("Eres Capricornio");
      break;

    case "2":
    case "febrero":
      console.log("Eres Acuario");
      break;

    case "3":
    case "marzo":
      console.log("Eres Picis");
      break;

    case "4":
    case "abril":
      console.log("Eres Aries");
      break;

    case "5":
    case "mayo":
      console.log("Eres Tauro");
      break;

    case "6":
    case "junio":
      console.log("Eres Géminis");
      break;

    case "7":
    case "julio":
      console.log("Eres Cáncer");
      break;

    case "8":
    case "agosto":
      console.log("Eres Leo");
      break;

    case "9":
    case "septiembre":
      console.log("Eres Virgo");
      break;

    case "10":
    case "octubre":
      console.log("Eres Libra");
      break;

    case "11":
    case "noviembre":
      console.log("Eres Escorpio");
      break;

    case "12":
    case "diciembre":
      console.log("Eres Sagitario");
      break;

    default:
      console.log("me quieres ver la cara?");
      break;
  }
}
