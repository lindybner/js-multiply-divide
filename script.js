// VARIABLES
const numOneInput = document.querySelector("#num-1");
const numTwoInput = document.querySelector("#num-2");
const btnMultiply = document.querySelector("#btn-multiply");
const btnDivide = document.querySelector("#btn-divide");
const resultOutput = document.querySelector("#result-output");

// EVENT LISTENERS & FN
// multiply
btnMultiply.addEventListener("click", function () {
    // prevent form submission
    event.preventDefault();

    // collect inputs
    let numOne = parseFloat(numOneInput.value);
    let numTwo = parseFloat(numTwoInput.value);
    
    // multiply
    let result = numOne * numTwo;
    
    // output result
    resultOutput.innerHTML = result;
})

// divide
btnDivide.addEventListener("click", function () {
    // prevent form submission
    event.preventDefault();

    // collect inputs
    let numOne = parseFloat(numOneInput.value);
    let numTwo = parseFloat(numTwoInput.value);

    // divide
    let result = numOne / numTwo;

    // output result
    resultOutput.innerHTML = result;
})