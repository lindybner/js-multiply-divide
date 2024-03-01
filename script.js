// VARIABLES
const numOneInput = document.querySelector("#num-1");
const numTwoInput = document.querySelector("#num-2");
const btnMultiply = document.querySelector("#btn-multiply");
const btnDivide = document.querySelector("#btn-divide");
const resultOutput = document.querySelector("#result-output");

// FUNCTIONS
// multiply
function multiply(numOne, numTwo) {
    result = numOne * numTwo;
    return result;
}

// divide
function divide(numOne, numTwo) {
    result = numOne / numTwo;
    return result;
}

// process multiply click
function processMultiply() {
    // prevent form submission
    event.preventDefault();

    // collect inputs
    let numOne = parseFloat(numOneInput.value);
    let numTwo = parseFloat(numTwoInput.value);
    
    // multiply
    let result = multiply(numOne, numTwo);
    
    // output result
    resultOutput.innerHTML = result;
}

// process divide click
function processDivide() {
    // prevent form submission
    event.preventDefault();

    // collect inputs
    let numOne = parseFloat(numOneInput.value);
    let numTwo = parseFloat(numTwoInput.value);

    // divide
    let result = divide(numOne, numTwo);

    // output result
    resultOutput.innerHTML = result;
}

// EVENT LISTENERS
// multiply
btnMultiply.addEventListener("click", processMultiply);

// divide
btnDivide.addEventListener("click", processDivide);