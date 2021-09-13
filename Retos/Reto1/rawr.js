var word = prompt("Write a word:")
var btn = document.createElement("button");
btn.innerHTML = "Opción 1";
let div = document.getElementById("btn");
div.appendChild(btn)
btn.onclick = function () {
  word = word.toLowerCase();
  const arr = word.split("");
  result = arr.sort();
  console.log(result.join(''))
  btn = document.getElementById("btn");
};

var ctn = document.createElement("button");
let riv = document.getElementById("ctn");
div.appendChild(ctn)
ctn.innerHTML = "Opción 2";
ctn.onclick = function () {
  result = word.toUpperCase();
  console.log(result)
};
