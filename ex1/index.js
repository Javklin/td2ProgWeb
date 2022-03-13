document.getElementById("turn-on").addEventListener("click", switchOn);
document.getElementById("turn-off").addEventListener("click", switchOff);
function switchOn() {
  // on recupère l'id de l'image
  document.getElementById("myImg").src = "./image/ligth-on.png";
}
function switchOff() {
  document.getElementById("myImg").src = "./image/light-off.png";
}
