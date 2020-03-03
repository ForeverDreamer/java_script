const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

/* As a comment
* This is also a comment
* And this is!
* */

// Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);  // from vendor file
}

function writeToLog(operation, prevResult, enteredNumber, result) {
    const logEntry = {
        operation: operation,
        prevResult: prevResult,
        number: enteredNumber,
        result: result
    };
    logEntries.push(logEntry);
    console.log(typeof(logEntry.prevResult));
    console.log(typeof(logEntry));
    console.log(typeof(logEntries));
    console.log(typeof(undefined));
    console.log(typeof(null));
    console.log(typeof(NaN));
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // const calcDescription = `${currentResult} + ${enteredNumber}`;
    currentResult += enteredNumber;
    // currentResult++;
    createAndWriteOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
    // console.log(logEntries[0]);
    // '+'转换成数字，效果一样
    // currentResult = currentResult + +(userInput.value);
    // outputResult(currentResult, calcDescription);
    // alert('The result is ' + result);
    // return result;
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    // --currentResult;
    createAndWriteOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /=  enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// currentResult = (currentResult + 10) * 3 / 2 - 1;
// currentResult = add(1, 2);
// const calculationDescription = '(' + currentResult + ' + 10) * 3 / 2 - 1';
const calculationDescription = `(${currentResult} + 10) * 3 / 2 - 1`;
const errorMessage = 'An error \n' +
                     'occurred!';
// outputResult(currentResult, calculationDescription);
