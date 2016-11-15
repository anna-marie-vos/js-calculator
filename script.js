$(document).ready(mainProgram);

function mainProgram(){

clickNumbers(document.getElementsByClassName('inputs')[0].children);
clickOperators(document.getElementsByClassName('operators')[0].children);
document.getElementById('equal').addEventListener('click', performcCalc);
document.getElementById('clearAll').addEventListener('click',clearAll);
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
//convert the value to a number
function assignValues(evt){
  var x = evt.target.innerHTML;
  values +=x;
  record(x);
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
  recordedEntries.push(parseFloat(values));
  resetValue();
  record(evt.target.innerHTML);
  recordedEntries.push(evt.target.id);
}
//when the answer button is clicked perform find the operation and
// use the values before and after it to do the calculation.
// send the answer to the html file.
// and assign it to the last last number that was used.
function performcCalc(){
  recordedEntries.push(parseFloat(values));
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
    }
  }
  recordedEntries = [];
  values = y;
  document.getElementById('tracker').innerHTML =y;
}

function clearAll(){
  value = ""
  recordedEntries = [];
  document.getElementById('tracker').innerHTML = "";
  document.getElementById('answer').innerHTML = "0";
}

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
