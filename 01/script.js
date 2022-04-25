"use strict";

//while ciklas
let i = 0;
let values = '';
while (i < 5) {
  values = values + `<br>Skaicius yra ${i}`;
  if(i === 3) {break} //break naudojamas sustabdyti cikla
  i++;
}
document.getElementById('loopValue').innerHTML = values;

//do...while ciklas
let n = 0;
let text = '';
do {
  n++;
  text = text + `<br>Skaicius yra ${n}`;
} while(n < 5)
document.getElementById('doWhileLoopValue').innerHTML = text;

let savaitesDienos = ['Pirmadienis', 'Antradienis', 'Treciadienis', 'Ketvirtadienis', 'Penktadienis', 'Sestadienis', 'Sekmadienis'];
const pavadinimas = 'Savaites dienos';
let html = `<h2>${pavadinimas}</h2><ul>`
for(let d = 0; d<savaitesDienos.length; d++) {
  html += `<li>${savaitesDienos[d]}</li>`;
}
html += `</ul>`;
document.getElementById('playground').innerHTML = html;