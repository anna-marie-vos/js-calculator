$(document).ready(mainProgram);

function mainProgram(){

document.addEventListener("click",assignValues);

}
var recordingString="";
// take input from all buttons
//01: add event listeners for all buttons
function assignValues(evt){
var x = evt.target.innerHTML;
recordingString += x;
record();
}
// function assignOperators(evt){
//
// }
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
