let redRange = document.getElementById('range-red');
let greenRange = document.getElementById('range-green');
let blueRange = document.getElementById('range-blue');

let redInput = document.getElementById('input-red');
let greenInput = document.getElementById('input-green');
let blueInput = document.getElementById('input-blue');

let penguinSkinBtn = document.getElementById('penguinSkinBtn');
let penguinBellyBtn = document.getElementById('penguinBellyBtn');
let penguinBeakBtn = document.getElementById('penguinBeakBtn');

let divInput = document.getElementById('inputsBtn');

divInput.addEventListener('click', chosenBtn);

let penguin = document.getElementsByClassName('penguin');
// bgColor.style.backgroundColor = '#000';

let red = 0;
let green = 0;
let blue = 0;

function start() {
  getRed();
  getGreen();
  getBlue();
  renderColors();
}

// document.documentElement.style.setProperty('--penguin-skin');

let counter = 0;

function chosenBtn(event) {
  counter += 1;
  console.log(counter);

  if (counter % 2 === 0) {
    console.log('entrou aqui');
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
    console.log('event if de fora parte else', event.target.id);
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

  console.log('dentro do primeiro if', event);

  console.log(counter);
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
  redRange.addEventListener('input', function () {
    let currentValueRed = redRange.value;
    red = currentValueRed;
    redInput.value = currentValueRed;
    renderColors();
  });
}

function getGreen() {
  greenRange.addEventListener('input', function () {
    let currentValueGreen = greenRange.value;
    green = currentValueGreen;
    greenInput.value = currentValueGreen;
    renderColors();
  });
}

function getBlue() {
  blueRange.addEventListener('input', function () {
    let currentValueBlue = blueRange.value;
    blue = currentValueBlue;
    blueInput.value = currentValueBlue;
    renderColors();
  });
}

function renderColors() {
  r = red;
  g = green;
  b = blue;

  console.log(r);
  console.log(g);
  console.log(b);
  console.log(penguinSkinBtn);
  console.log(penguinSkinBtn.style.backgroundColor);

  let skinChosen = penguinSkinBtn.style.backgroundColor;
  let bellyChosen = penguinBellyBtn.style.backgroundColor;
  let beakChosen = penguinBeakBtn.style.backgroundColor;

  if (r >= 0 && g >= 0 && b >= 0) {
    // penguin.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    usedColor = `rgb(${red}, ${green}, ${blue})`;
  }

  if (skinChosen == 'green') {
    console.log('chegou aqui');
    console.log(usedColor);
    getComputedStyle(document.documentElement, null).getPropertyValue(
      '--penguin-skin'
    );
    document
      .querySelector('.penguin')
      .style.setProperty('--penguin-skin', usedColor);
  } else if (bellyChosen == 'green') {
    console.log('chegou aqui 2');
    document
      .querySelector('.penguin')
      .style.setProperty('--penguin-belly', usedColor);
  } else if (beakChosen == 'green') {
    document
      .querySelector('.penguin')
      .style.setProperty('--penguin-beak', usedColor);
    console.log('chegou aqui 3');
  }
  // ,penguinBellyBtn,penguinBeakBtn

  // document.documentElement.style.setProperty('--penguin-skin', usedColor);
}

disableRange();
start();
