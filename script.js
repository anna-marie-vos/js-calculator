$(document).ready(mainProgram);

function mainProgram(){

clickNumbers(document.getElementsByClassName('inputs')[0].children);
clickOperators(document.getElementsByClassName('operators')[0].children);
document.getElementById('equal').addEventListener('click', performcCalc);
}
var values ="";
var enteredNumbers=[];
var enterOperator=[];
// take input from all buttons
//01: add event listeners for all numbers
function clickNumbers(numbers){
  for(var a =0; a<numbers.length; a++){
    numbers[a].addEventListener('click',assignValues);
  }
}
// keep record of the values.
//convert the value to a number
function assignValues(evt){
  var x = evt.target.innerHTML;
  values +=x;
  record(x);
  console.log(values);
}
//reset value
function resetValue(){
  values = "";
}
//add event listeners for the operators
function clickOperators(operator){
  for(var a =0; a<operator.length; a++){
    operator[a].addEventListener('click',assignOperators);
  }
}
//keep record of all the operators
//assign a value to them.
function assignOperators(evt){
  enteredNumbers.push(parseFloat(values));
  resetValue();
  record(evt.target.innerHTML);
  enteredNumbers.push(evt.target.id);
  console.log(enteredNumbers)
}

function performcCalc(){
  enteredNumbers.push(parseFloat(values));
  console.log(enteredNumbers);
  for(var x = 0; x< enteredNumbers.length;x++){
    var y = 0;
    switch(enteredNumbers[x]){
      case 'plus':
        y = enteredNumbers[x-1] + enteredNumbers[x+1];
        answer(y);
      default:
    }
  }
}
// function assignMemory(evt){
//
// }
// subtract operation
// addition operation
// subtraction operation
// division operation
// answer operation
// percentage operation
// clear items entered
// clear memory
//show calculations up to now.
function record(x){
  document.getElementById('tracker').innerHTML += x;
}
function answer(x){
  document.getElementById('answer').innerHTML = x;
}
// use API for scientific operations
