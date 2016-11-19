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

function recordValue(){
  if(values ==""){
    return;
  }else{
  recordedEntries.push(parseFloat(values));
  values = "";
  }
}

function clickOperators(operator){
  for(var a =0; a<operator.length; a++){
    operator[a].addEventListener('click',assignOperators);
  }
}

function assignOperators(evt){
  addingToFirstString();
  recordValue();
  recordedEntries.push(evt.target.id);
  record(evt.target.innerHTML);
}


function assignEqual(evt){
  addingToFirstString();
  recordValue();
  if(isNaN(recordedEntries[0])){
    answer(recordedEntries[1]);

  } else{
  answer(recordedEntries[0]);
}
  performcCalc();
}

function performcCalc(){
  var y = document.getElementById('answer').innerHTML;
  for(var x = 0; x< recordedEntries.length;x++){
    if(x ===0 && isNaN(recordedEntries[0])){
      x = 1;
    }else{
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
        console.log(y);
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
  }
  values = y;
  document.getElementById('tracker').innerHTML = values;
  recordedEntries = [];
}

function clearAll(){
  values = ""
  recordedEntries = [];
  document.getElementById('tracker').innerHTML = "";
  document.getElementById('answer').innerHTML = "0";
}
function clearPrevious(){
    var y = values.toString();
    recordValue();
    var x = document.getElementById('tracker').innerHTML;
    x = x.slice(0,-1);
    document.getElementById('tracker').innerHTML = x;
    recordedEntries.pop();
    values = y.slice(0,-1);
}

function addingToFirstString(){
  if(recordedEntries.length ===1){
    values = document.getElementById('tracker').innerHTML;
  }else{
    return;
  }
}

function record(x){
  document.getElementById('tracker').innerHTML += x;
}
//send the value to the answer html
function answer(x){
  document.getElementById('answer').innerHTML = x;
}
