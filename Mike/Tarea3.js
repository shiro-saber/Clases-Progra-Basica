// variables
var mes = prompt ("Introduce por favor tu mes de nacimiento");
var dia = prompt ("Introduce por favor tu día de nacimiento");
let signo = ['Acuario', 'Piscis', 'Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio'];

// condicionales
mes == "enero"     || mes ==  "1" ? dia < 21 ? console.log(signo[11]) : console.log(signo[0]) :
mes == "febrero"   || mes ==  "2" ? dia < 19 ? console.log(signo[0]) : console.log(signo[1]) :
mes == "marzo"     || mes ==  "3" ? dia < 21 ? console.log(signo[1]) : console.log(signo[2]) : 
mes == "abril"     || mes ==  "4" ? dia < 21 ? console.log(signo[2]) : console.log(signo[3]) : 
mes == "mayo"      || mes ==  "5" ? dia < 22 ? console.log(signo[3]) : console.log(signo[4]) : 
mes == "junio"     || mes ==  "6" ? dia < 22 ? console.log(signo[4]) : console.log(signo[5]) : 
mes == "julio"     || mes ==  "7" ? dia < 23 ? console.log(signo[5]) : console.log(signo[6]) : 
mes == "agosoto"   || mes ==  "8" ? dia < 24 ? console.log(signo[6]) : console.log(signo[7]) : 
mes == "septiembre"|| mes ==  "9" ? dia < 24 ? console.log(signo[7]) : console.log(signo[8]) : 
mes == "octubre"   || mes == "10" ? dia < 24 ? console.log(signo[8]) : console.log(signo[9]) : 
mes == "noviembre" || mes == "11" ? dia < 23 ? console.log(signo[9]) : console.log(signo[10]) : 
mes == "diciembre" || mes == "12" ? dia < 22 ? console.log(signo[10]) : console.log(signo[11]) : 
console.log("Hubo un error, favor de intentar de nuevo");
