// 2. Onclick Using a FUNCTION
function makeRed() {
  document.body.style.background = "red";
}

// 3. Onclick using ID
var makeMeBlue = document.getElementById("make-blue");
makeMeBlue.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// Easy system of 3=> Onclick using ID
var purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function purpleBg() {
  document.body.style.backgroundColor = "purple";
};
