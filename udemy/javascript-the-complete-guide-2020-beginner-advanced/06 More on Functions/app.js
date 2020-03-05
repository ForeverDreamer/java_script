const startGameBtn = document.getElementById('start-game-btn');

console.log('函数声明(Function Declaration/Statement)定义的函数可以先调用，后声明')
startGame();

// 独立声明的叫函数(function)
function startGame() {
    console.log('Game is starting...');
}

// Uncaught ReferenceError: Cannot access 'start' before initialization
// start();

// 匿名函数
const start = function () {
    console.log('Game is starting...');
};

console.log('函数表达式(Function Expression)声明的函数只能先声明，后调用');
start();

// 声明在对象里边的属性叫方法(method)
// const person = {
//     name: 'Max',
//     greet: function greet() {
//         console.log('Hello there!');
//     }
// };
//
// person.greet();

console.log(typeof startGame);
console.dir(startGame);

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = function() {
    let selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}?`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        selection = DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = function () {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

// ES6箭头函数，只有一句表达式，简化代码
const add1 = (a, b) => a + b;

const add2  = function (a, b) {
    return a + b;
};

const hello = () => console.log('Hello');

const square = x => x * x;

const getWinner = (cChoice, pChoice=DEFAULT_USER_CHOICE) => {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK
    ) {
        return  RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
};

startGameBtn.addEventListener('click', function () {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const pChoice = getPlayerChoice();  // might be undefined
    const cChoice = getComputerChoice();
    let winner;
    if (pChoice) {
        winner = getWinner(cChoice, pChoice);
    } else {
        winner = getWinner(cChoice);
    }
    let message = `You picked ${pChoice || DEFAULT_USER_CHOICE}, computer picked ${cChoice}, therefore you `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw.';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won.';
    } else {
        message = message + 'lost.';
    }
    alert(message);
    gameIsRunning = false;
});

const sumUp1 = (a, b, c, d, e) => {
    return a + b + c + d + e;
};

console.log(sumUp1(1, 5, 10, -3, 6));

const sumUp2 = (numbers) => {
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
};

console.log(sumUp2([1, 5, 10, -3, 6]));

// 推荐使用...(Rest Operator)
const sumUp3 = (resultHandler, a, b, ...numbers) => {
    // 函数内部的函数
    const validateNumber = number => isNaN(number) ? 0 : number;
    console.log(a, b);
    console.log(numbers);
    let sum = 0;
    for (const num of numbers) {
        sum += validateNumber(num);
    }
    // return sum;
    resultHandler('The result after adding is:', sum);
};

const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
};

console.log(sumUp3(showResult,1, 5, 10, -3, 6));
console.log(sumUp3(showResult,1, 5, 10, -3, 6, 7, 15, 43));

// 不推荐使用arguments
// const subtractUp = function () {
//     let sum = 0;
//     for (const num of arguments) {
//         sum -= num;
//     }
//     return sum;
// };

const subtractUp = function (resultHandler, ...numbers) {
    let sum = 0;
    for (const num of numbers) {
        sum -= num;
    }
    // return sum;
    resultHandler('The result after subtracting is:', sum);
};

console.log(subtractUp(showResult, 1, 10, 15, 20));

const combine = function (resultHandler, operation, ...numbers) {
    let sum = 0;
    for (const num of numbers) {
        if (operation === 'ADD') {
            sum += num;
        } else {
            sum -= num;
        }
    }
    // return sum;
    // resultHandler(sum, `The result after ${operation.toLowerCase()}ing is:`);
    resultHandler(sum);
};

combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 5, 10, -3, 6);
combine(showResult.bind(this, 'The result after adding all numbers is:'), 'ADD', 1, 5, 10, -3, 6, 7, 15, 43);
combine(showResult.bind(this, 'The result after subtracting all numbers is:'), 'SUBTRACT', 1, 10, 15, 20);
