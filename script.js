$(document).ready(mainProgram);

function mainProgram(){

clickNumbers(document.getElementsByClassName('inputs')[0].children)
clickOperators(document.getElementsByClassName('operators')[0].children)

}
var recordingString="";
var values = " ";
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
  recordingString += x;
  values +=x;
  var output = parseFloat(values);
  record();
  console.log (output);
  return output;
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
  var x = evt.target.innerHTML;
  recordingString += x;
  record();
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
function record(){
  document.getElementById('tracker').innerHTML = recordingString;
}
// use API for scientific operations
