window.onload = () => {
    // VARIABLES
    const numOneInput = document.querySelector("#num-1");
    const numTwoInput = document.querySelector("#num-2");
    const btnMultiply = document.querySelector("#btn-multiply");
    const btnDivide = document.querySelector("#btn-divide");
    const resultOutput = document.querySelector("#result-output");

    // FUNCTIONS
    // output result
    const outputResult = result => {
        resultOutput.innerHTML = result;
    }

    // multiply
    const multiply = (numOne, numTwo) => {
        result = numOne * numTwo;
        return result;
    }

    // divide
    const divide = (numOne, numTwo) => {
        result = numOne / numTwo;
        return result;
    }

    // process multiply click
    const clickMultiply = event => {
        // prevent form submission
        event.preventDefault();

        // collect inputs
        let numOne = parseFloat(numOneInput.value);
        let numTwo = parseFloat(numTwoInput.value);
        
        // multiply
        let result = multiply(numOne, numTwo);
        
        // output result
        outputResult(result);
    }

    // process divide click
    const clickDivide = event => {
        // prevent form submission
        event.preventDefault();

        // collect inputs
        let numOne = parseFloat(numOneInput.value);
        let numTwo = parseFloat(numTwoInput.value);

        // divide
        let result = divide(numOne, numTwo);

        // output result
        outputResult(result);
    }

    // EVENT LISTENERS
    // multiply
    btnMultiply.addEventListener("click", clickMultiply);

    // divide
    btnDivide.addEventListener("click", clickDivide);
}