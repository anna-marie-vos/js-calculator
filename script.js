$(document).ready(mainProgram);

function mainProgram(){

clickNumbers(document.getElementsByClassName('inputs')[0].children);
clickOperators(document.getElementsByClassName('operators')[0].children);
document.getElementById('equal').addEventListener('click', assignEqual);
document.getElementById('clearAll').addEventListener('click',clearAll);
document.getElementById('clearTemp').addEventListener('click',clearPrevious);

}
var values ="";
var recordedEntries=[];

// take input from all buttons
//01: add event listeners for all numbers
function clickNumbers(numbers){
  for(var a =0; a<numbers.length; a++){
    numbers[a].addEventListener('click',assignValues);
  }
}
// keep record of the values.
//accumulate the string of values until another operation is pressed.
function assignValues(evt){
  var x = evt.target.innerHTML;
  values +=x;
  record(x);
}
//convert the value string to a value.
//and addit to the recordedEntries array.
//and reset the values string for the new number.
function recordValue(){
  recordedEntries.push(parseFloat(values));
  resetValue();
}
//reset the values string for a new string to be added
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
// record the last values
//add the operator to the recordedEntries
//and keep record of the operation
function assignOperators(evt){
  recordValue();
  recordedEntries.push(evt.target.id);
  record(evt.target.innerHTML);
}
//record the last values
//record the last operation
// display the answer
//and perform a calculation
function assignEqual(evt){
  recordValue();
  record(evt.target.innerHTML);
  answer(recordedEntries[0]);
  performcCalc();
}
//when the equal button is clicked perform find the operation and
// use the values before and after it in the array to do the calculation.
// send the answer to the html file.
// and assign it to the last last number that was used.
function performcCalc(){
  var y = 0;
  for(var x = 0; x< recordedEntries.length;x++){
    switch(recordedEntries[x]){
      case 'plus':
        y = recordedEntries[x-1] + recordedEntries[x+1];
        answer(y);
        recordedEntries[x+1] = y;
        break;
      case 'minus':
        y = recordedEntries[x-1] - recordedEntries[x+1];
        answer(y);
        recordedEntries[x+1] = y;
        break;
      case 'divide':
        y = recordedEntries[x-1] / recordedEntries[x+1];
        answer(y);
        recordedEntries[x+1] = y;
        break;
      case 'multiply':
        y = recordedEntries[x-1] * recordedEntries[x+1];
        answer(y);
        recordedEntries[x+1] = y;
        break;
      case 'percentage':
        y = recordedEntries[x-1] *100;
        answer(y);
        recordedEntries[x+1] = y;
        break;
      default:
      y = recordedEntries[x];
    }
  }
  document.getElementById('tracker').innerHTML =y;
  values = y;
  recordedEntries = [];
}
//clear the values
//clear the recordedEntries
//reset the html tracker and answer
function clearAll(){
  values = ""
  recordedEntries = [];
  document.getElementById('tracker').innerHTML = "";
  document.getElementById('answer').innerHTML = "0";
}
function clearPrevious(){
  values ="";
  recordedEntries.slice(-1,1);
}
//add the either the value or operator the html tracker
function record(x){
  document.getElementById('tracker').innerHTML += x;
}
//send the value to the answer html
function answer(x){
  document.getElementById('answer').innerHTML = x;
}
