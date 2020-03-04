const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  // 此种检查方式代码可读性更强
  if (
      calculationType !== 'ADD' &&
      calculationType !== 'SUBTRACT' &&
      calculationType !== 'MULTIPLY' &&
      calculationType !== 'DIVIDE' ||
      !enteredNumber
  ) {
    return;
  }

  // if (
  //     calculationType === 'ADD' ||
  //     calculationType === 'SUBTRACT' ||
  //     calculationType === 'MULTIPLY' ||
  //     calculationType === 'DIVIDE'
  // ) {
  //   // 执行计算逻辑
  // }

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;

  let mathOperator;
  // "===和!==" 比 "==和!=" 严格，2=='2'为true， 2==='2'为false，因为===还要检测类型，推荐使用===和!==
  if (calculationType === 'ADD') {
    currentResult += enteredNumber;
    mathOperator = '+';
  } else if ( calculationType === 'SUBTRACT'){
    currentResult -= enteredNumber;
    mathOperator = '-';
  } else if ( calculationType === 'MULTIPLY'){
    currentResult *= enteredNumber;
    mathOperator = '*';
  } else if ( calculationType === 'DIVIDE'){
    currentResult /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD')
}

function subtract() {
  calculateResult('SUBTRACT')
}

function multiply() {
  calculateResult('MULTIPLY')
}

function divide() {
  calculateResult('DIVIDE')
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
