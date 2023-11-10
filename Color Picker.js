let containerElement = document.getElementById("colorPickerContainer");
let spanElement = document.getElementById("selectedColorHexCode");
spanElement.style.color = "#49a6e9";

let buttonOneEl = document.getElementById("button1");
let buttonTwoEl = document.getElementById("button2");
let buttonThreeEl = document.getElementById("button3");
let buttonFourEl = document.getElementById("button4");

function buttonOne() {
    spanElement.textContent = buttonOneEl.textContent;
    containerElement.style.backgroundColor = buttonOneEl.textContent;
}

function buttonTwo() {
    spanElement.textContent = buttonTwoEl.textContent;
    containerElement.style.backgroundColor = buttonTwoEl.textContent;
}

function buttonThree() {
    spanElement.textContent = buttonThreeEl.textContent;
    containerElement.style.backgroundColor = buttonThreeEl.textContent;
}

function buttonFour() {
    spanElement.textContent = buttonFourEl.textContent;
    containerElement.style.backgroundColor = buttonFourEl.textContent;
}