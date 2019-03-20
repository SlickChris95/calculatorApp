/* Listening to key-presses
1. a number key(0-9)
2. an operator key(+,-,X, /)
3. the decimal key
4. the equals key
5. the clear key
*/

/* Problem cases:
1) user hits the decimal keys multiple times X
2) user clicks on multiple operators
3) user does an input such as 7 + 9 + 8 without clicking calculate


*/

var calculator = document.querySelector('#calc-box');
var keys = calculator.querySelector('#calc-buttons');
var display = document.querySelector('#calc-display');

keys.addEventListener('click',function(e){
  if(e.target.matches('button')){
    var key = e.target;
    var action = key.dataset.action;
    var keyContent = key.textContent
    var displayedNum = display.textContent;
    // concatenate the string if calc shows a non zero number

    if(!action){
      if(displayedNum === '0'){
        display.textContent = keyContent;
        console.log('test');
      }else {
        display.textContent = displayedNum + keyContent;
      }
    }

    if(action === 'decimal'){
      if(!display.textContent.includes('.'))
        display.textContent = displayedNum + '.';
    }

    if(action === 'addition'|| action === 'subtraction'||
    action === 'multiplication'|| action === 'division' || action === 'modulo'){
      key.classList.add('is-depressed'); // look into
      calculator.dataset.firstvalue = displayedNum;
      console.log(calculator.dataset.firstvalue)
      calculator.dataset.operator = action;
      console.log(calculator.dataset.operator)
      display.textContent = " ";
    }
    // console.log(display.textContent);
    if(action === 'calculate'){
      var secondValue = displayedNum;
      var firstvalue = calculator.dataset.firstvalue;
      var operator = calculator.dataset.operator;
      // if(firstvalue && operator)
      display.textContent = (calculate(firstvalue,operator,secondValue));
    }

    if(action === 'clear'){
      display.textContent = "0";
      firstvalue = 0;
      secondValue = 0;
      operator = " ";
    }


  }
});


function calculate(num1,operator,num2){
  var result = " ";

  switch(operator){
    case 'addition':
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case 'subtraction':
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case 'multiplication':
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case 'division':
      result = parseFloat(num1) / parseFloat(num2);
      break;
    case 'modulo':
      result = parseFloat(num1) % parseFloat(num2);
      break;
    default:
      console.log('something went wrong');
  }
  return result;

}















// var result = "";
// var clear = document.getElementById('symbol-AC');
// var neg = document.getElementById('symbol-neg');
// var division = document.getElementById('symbol-division');
// var modulo = document.getElementById('symbol-modulo');
// var seven = document.getElementById('symbol-7');
// var eight = document.getElementById('symbol-8');
// var nine = document.getElementById('symbol-9');
// var multiplication = document.getElementById('symbol-multiplication');
// var four = document.getElementById('symbol-4');
// var five = document.getElementById('symbol-5');
// var six = document.getElementById('symbol-6');
// var subtraction = document.getElementById('symbol-subtraction');
// var one = document.getElementById('symbol-1');
// var two = document.getElementById('symbol-2');
// var three = document.getElementById('symbol-3');
// var addition = document.getElementById('symbol-addition');
// var zero = document.getElementById('symbol-0');
// var decimal = document.getElementById('symbol-decimal');
// var equals = document.getElementById('symbol-equals');
//
// var  calcNumber = document.getElementById('calc-number');
// calcNumber.innerText = "4";
