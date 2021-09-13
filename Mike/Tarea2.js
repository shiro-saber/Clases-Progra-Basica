// Opcion 1
var mes = prompt ("Introduce por favor tu mes de nacimiento")
mes == "enero"? console.log("Tu signo zodiacal es Acuario") : mes == "febrero"? console.log("Tu signo zodiacal es Piscis") : mes == "marzo"? console.log("Tu signo zodiacal es Aries") : mes == "abril"? console.log("Tu signo zodiacal es Tauro") : mes == "mayo"? console.log("Tu signo zodiacal es Géminis") : mes == "junio"? console.log("Tu signo zodiacal es Cáncer") : mes == "julio"? console.log("Tu signo zodiacal es Leo") : mes == "agosto"? console.log("Tu signo zodiacal es Virgo"): mes == "septiembre"? console.log("Tu signo zodiacal es Libra") : mes == "octubre"? console.log("Tu signo zodiacal es Escorpio") : mes == "noviembre"? console.log("Tu signo zodiacal es Sagitario") : mes == "diciembre"? console.log("Tu signo zodiacal es Capricornio") : mes == "1"? console.log("Tu signo zodiacal es Acuario") : mes == "2"? console.log("Tu signo zodiacal es Piscis") : mes == "3"? console.log("Tu signo zodiacal es Aries") : mes == "4"? console.log("Tu signo zodiacal es Tauro") : mes == "5"? console.log("Tu signo zodiacal es Géminis") : mes == "6"? console.log("Tu signo zodiacal es Cáncer") : mes == "7"? console.log("Tu signo zodiacal es Leo") : mes == "8"? console.log("Tu signo zodiacal es Virgo"): mes == "9"? console.log("Tu signo zodiacal es Libra") : mes == "10"? console.log("Tu signo zodiacal es Escorpio") : mes == "11"? console.log("Tu signo zodiacal es Sagitario") : mes == "12"? console.log("Tu signo zodiacal es Capricornio") : console.log("Hubo error, intenta de nuevo por favor");

// Opcion 2
var mes = prompt ("Introduce por favor tu mes de nacimiento")
let signo = ['Acuario', 'Piscis', 'Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio'];
mes == "enero" || mes == "1" ? console.log(signo[0]) : mes == "febrero" || mes == "2" ? console.log(signo[1]) : mes == "marzo" || mes == "3" ? console.log(signo[2]) : mes == "abril" || mes == "4" ? console.log(signo[3]) : mes == "mayo" || mes == "5" ? console.log(signo[4]) : mes == "junio" || mes == "6" ? console.log(signo[5]) : mes == "julio" || mes == "7" ? console.log(signo[6]) : mes == "agosoto" || "8" ? console.log(signo[7]) : mes == "septiembre" || mes == "9" ? console.log(signo[8]) : mes == "octubre"  || mes == "10" ? console.log(signo[9]) : mes == "noviembre" || mes == "11" ? console.log(signo[10]) : mes == "diciembre" || mes == "12" ? console.log(signo[11]) : console.log("Hubo error, favor de intentar de nuevo");

// Opcion 3
var mes = prompt ("Introduce por favor tu mes de nacimiento");
var pos;
let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
let numero = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
let signo = ['Acuario', 'Piscis', 'Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio'];
typeof Number(mes) ? pos = numero.indexOf(mes) : console.log("No es número");
typeof String(mes) ? pos = meses.indexOf(mes) : console.log("No es texto");
console.log(signo[pos]);
