const redInput = document.getElementById('red')
const greenInput = document.getElementById('green')
const blueInput = document.getElementById('blue')

redInput.value = 255;
greenInput.value = 255;
blueInput.value = 255;

redInput.addEventListener('input', onInput);
greenInput.addEventListener('input', onInput);
blueInput.addEventListener('input', onInput);

function onInput(e){

document.body.style.background = `rgb(${redInput.value}, ${greenInput.value}, ${blueInput.value})`;

}