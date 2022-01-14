var i = 0;
var txt = 'Bedankt voor het lezen van mijn website. Ik heb veel plezier gehad tijdens het maken en coderen van deze website!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
 
function typeWriter() {
 if (i < txt.length) {
   document.getElementById("demo").innerHTML += txt.charAt(i);
   i++;
   setTimeout(typeWriter, speed);
 }
}
 
window.document.onload(typeWriter())