const textToType = "Rzecz o podatkach";
const placeToType = document.querySelector("#typing");
let i = 0;

function typeText() {
  if (i < textToType.length) {
    placeToType.innerHTML += textToType.charAt(i);
    i++;
    setTimeout(typeText, 150);
  }
}

document.addEventListener('DOMContentLoaded', typeText);

