let redRange = document.getElementById('range-red');
let greenRange = document.getElementById('range-green');
let blueRange = document.getElementById('range-blue');

let redInput = document.getElementById('input-red');
let greenInput = document.getElementById('input-green');
let blueInput = document.getElementById('input-blue');

let penguinSkinBtn = document.getElementById('penguinSkinBtn');
let penguinBellyBtn = document.getElementById('penguinBellyBtn');
let penguinBeakBtn = document.getElementById('penguinBeakBtn');

redRange.addEventListener('input', getRed);
greenRange.addEventListener('input', getGreen);
blueRange.addEventListener('input', getBlue);

let divInput = document.getElementById('inputsBtn');

divInput.addEventListener('click', chosenBtn);

let penguin = document.getElementsByClassName('penguin');

let red = 0;
let green = 0;
let blue = 0;

function start() {
  getRed();
  getGreen();
  getBlue();
  renderColors();
}

let counter = 0;

function chosenBtn(event) {
  counter += 1;

  if (counter % 2 === 0) {
    if (event.target.id === 'penguinSkinBtn') {
      penguinSkinBtn.style.background = 'red';
    } else if (event.target.id === 'penguinBellyBtn') {
      penguinBellyBtn.style.background = 'red';
    } else {
      penguinBeakBtn.style.background = 'red';
    }
    disableRange();
    penguinSkinBtn.disabled = false;
    penguinBellyBtn.disabled = false;
    penguinBeakBtn.disabled = false;
  } else {
    if (event.target.id === 'penguinSkinBtn') {
      penguinSkinBtn.style.backgroundColor = 'green';
      penguinBellyBtn.disabled = true;
      penguinBeakBtn.disabled = true;
    } else if (event.target.id === 'penguinBellyBtn') {
      penguinBellyBtn.style.background = 'green';
      penguinSkinBtn.disabled = true;
      penguinBeakBtn.disabled = true;
    } else {
      penguinBeakBtn.style.background = 'green';
      penguinSkinBtn.disabled = true;
      penguinBellyBtn.disabled = true;
    }

    enableRange();
  }
}

function disableRange() {
  redRange.disabled = true;
  greenRange.disabled = true;
  blueRange.disabled = true;
}

function enableRange() {
  redRange.disabled = false;
  greenRange.disabled = false;
  blueRange.disabled = false;
}

function getRed() {
  let currentValueRed = redRange.value;
  red = currentValueRed;
  redInput.value = currentValueRed;
  renderColors();
}

function getGreen() {
  let currentValueGreen = greenRange.value;
  green = currentValueGreen;
  greenInput.value = currentValueGreen;
  renderColors();
}

function getBlue() {
  let currentValueBlue = blueRange.value;
  blue = currentValueBlue;
  blueInput.value = currentValueBlue;
  renderColors();
}

function renderColors() {
  r = red;
  g = green;
  b = blue;

  let skinChosen = penguinSkinBtn.style.backgroundColor;
  let bellyChosen = penguinBellyBtn.style.backgroundColor;
  let beakChosen = penguinBeakBtn.style.backgroundColor;

  if (r >= 0 && g >= 0 && b >= 0) {
    usedColor = `rgb(${red}, ${green}, ${blue})`;
  }

  if (skinChosen == 'green') {
    getComputedStyle(document.documentElement, null).getPropertyValue(
      '--penguin-skin'
    );
    document
      .querySelector('.penguin')
      .style.setProperty('--penguin-skin', usedColor);
  } else if (bellyChosen == 'green') {
    document
      .querySelector('.penguin')
      .style.setProperty('--penguin-belly', usedColor);
  } else if (beakChosen == 'green') {
    document
      .querySelector('.penguin')
      .style.setProperty('--penguin-beak', usedColor);
  }
}

disableRange();
start();
