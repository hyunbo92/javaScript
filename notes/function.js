// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration (함수 정의방법)
// function name(param1, param2) { body... return; }
// one function === one thing  -->하나의 함수는 한가지의 일만 하도록 정의,,
// naming: doSomething, command, verb  -->동사형태로 네이밍
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS  -->fuction은 object 의 일종 
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value   -->프리미티브 타입은 값이 전달
// object parameters: passed by reference  --?오브젝트는 레퍼런스가 전달
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {   //--> from = 'unknown' 이렇게 해놓으면 from 값을 파라미터로 받지 않았을때 저절로 unknown 이라는 값으로 들어감
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) { // ...args 을 쓰면 배열 형태로 전달됨
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) { //위와같은 for 문임 
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg)); // //위와같은 for 문임 
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope --> 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. (scope 에 따른 지역변수,글로벌 변수)
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
 }//조건이 맞지 않을땐 빨리리턴하고 조건이 맞을때 로직을 실행하는것이 효율적
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted) 함수가 선언되기 전에 호출해도 사용가능 (js 엔진이 선언을 제일 위로 올리기 때문,,)
// a function expression is created when the execution reaches it.
const print = function () {
  // anonymous function  이름없는 함수
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() { //함수명 쓰면 디버깅할때 용이
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function  -->함수를 간결하게 만들어줘  => 이렇게 표기
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;  //한줄일 경우 이렇게만 선언가능
const simpleMultiply = (a, b) => {  //블럭을 쓰면 retrun 을 써야됨
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression -->선언함과 동시에 바로 실행(잘 쓰진 않음)
(function hello() {
  console.log('IIFE');
})();

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unkonwn command');
  }
}
console.log(calculate('add', 2, 3));
