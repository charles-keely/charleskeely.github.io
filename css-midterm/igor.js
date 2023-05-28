var i = 0;
var txt = 'IGOR'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("animation1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}