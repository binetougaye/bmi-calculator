// Weight Variables
let weightSlider = document.getElementById("myWeight");
let weightOutput = document.getElementById("inputWeight");
// Height Variables

let heightSlider = document.getElementById("myHeight");
let heightOutput = document.getElementById("inputHeight");
// Display sliders value
weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;
weightSlider.oninput = function () {
  weightOutput.innerHTML = this.value;
};
heightSlider.oninput = function () {
  heightOutput.innerHTML = this.value;
};

function showValWeight(newVal) {
  weightSlider.value = newVal;
}
function showValHeight(newVal) {
  heightSlider.value = newVal;
}
weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);
function updateValueHeight(e) {
  heightOutput.value = e.srcElement.value;
}
function updateValueWeight(e) {
  weightOutput.value = e.srcElement.value;
}
//
let message = document.getElementById("message");
let button = document.querySelector(".btn");
let evaluationMessage = document.getElementById("evaluationMessage");
button.addEventListener("click", function () {
  // Convertir la taille
  let tailles = ((heightOutput.value / 100) * heightOutput.value) / 100;
  let imc = weightOutput.value / tailles;
  evaluationMessage.innerHTML = "Ton imc est de " + imc;
  if (imc > 26) {
    message.innerHTML = "Start workout bro!";
  }
});
