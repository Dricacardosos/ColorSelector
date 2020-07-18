var divColors   = document.querySelector('#frame');
var rangeRed    = document.querySelector('#colorRed');
var rangeGreen  = document.querySelector('#colorGreen');
var rangeBlue   = document.querySelector('#colorBlue');

var inputTextRed    = document.querySelector('#textInputRed');
var inputTextGreen  = document.querySelector('#textInputGreen');
var inputTextBlue   = document.querySelector('#textInputBlue');

function start() {
    rangeRed.addEventListener('change', setInput);
    rangeGreen.addEventListener('change', setInput);
    rangeBlue.addEventListener('change', setInput);

    random();
    setColor();
}

function setInput(event) {
    var currentInputId = event.target.id;
    var currentInputValue = event.target.value;

    if (currentInputId == 'colorRed') {
        red = currentInputValue;
    } else if (currentInputId == 'colorGreen'){
        green = currentInputValue;
    }else{
        blue = currentInputValue;
    }
    
    setColor();    
}

function setColor() {
    divColors.classList.add('divQuadro');
    divColors.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    
    inputTextRed.value = red;  
    inputTextGreen.value = green;  
    inputTextBlue.value = blue;

    rangeRed.value = red;
    rangeGreen.value = green;
    rangeBlue.value = blue;
}

function random() {
    red     = Math.floor(Math.random() * 255);
    green   = Math.floor(Math.random() * 255);
    blue    = Math.floor(Math.random() * 255);
}

start();