//loop program
for (var i= 0; i=Infinity; i++)
{

//Prompt the user for their birthdate
const month = prompt("In which month were you born, eh?");
const day = prompt("Which day of this amazing month were you born, homie?");

var sign = "";

//Look for the match of birthdate and zodiac sign
if (month == "December" || "12")
{
	if (day < 22)
  sign = ("Sagittarius");
  else
  sign = ("Capricorne");
}

else if (month == "January" || "01")
{
	if (day < 20)
  sign = ("Capricorn");
  else
  sign = ("Aquarius");
}

else if (month == "February" || "02")
{
	if (day < 19)
  sign = ("Aquarius");
  else
  sign = ("Pisces");
}

else if (month == "March" || "03")
{
	if (day < 21)
  sign = ("Pisces");
  else
  sign = ("Aries");
}

else if (month == "April" || "04")
{
	if (day < 20)
  sign = ("Aries");
  else
  sign = ("Taurus");
}

else if (month == "May" || "05")
{
	if (day < 21)
  sign = ("Taurus");
  else
  sign = ("Gemini");
}

else if (month == "June" || "06")
{
	if (day < 21)
  sign = ("Gemini");
  else
  sign = ("Cancer");
}

else if (month == "July" || "07")
{
	if (day < 23)
  sign = ("Cancer");
  else
  sign = ("Leo");
}

else if (month == "August" || "08")
{
	if (day < 19)
  sign = ("Leo");
  else
  sign = ("Virgo");
}

else if (month == "September" || "09")
{
	if (day < 23)
  sign = ("Virgo");
  else
  sign = ("Libra");
}

else if (month == "October" || "10")
{
	if (day < 23)
  sign = ("Libra");
  else
  sign = ("Scorpio");
}

else if (month == "November" || "11")
{
	if (day < 22)
  sign = ("Scorpio");
  else
  sign = ("Sagittarius");
}

console.log("sign");

}
