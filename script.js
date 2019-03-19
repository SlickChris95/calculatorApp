/* Listening to key-presses
1. a number key(0-9)
2. an operator key(+,-,X, /)
3. the decimal key
4. the equals key
5. the clear key
*/

var calculator = document.querySelector('#calc-box');
var keys = calculator.querySelector('#calc-buttons');

keys.addEventListener('click',function(e){
  if(e.target.matches('button')){
    var key = e.target;
    var action = key.dataset.action;
    if(!action){
      console.log('number key!')
    }
    if(action === 'addition'|| action === 'subtraction' || action === 'multiplication'
      || action === 'modulo' || action ==='division' ){
        console.log('operator operator');
      }
    if(action === 'clear'){
      console.log('clear');
    }
    if(action === 'negative'){
      console.log('negative');
    }
    if(action === 'calculate'){
      console.log('calculate');
    }
  }
});






















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
