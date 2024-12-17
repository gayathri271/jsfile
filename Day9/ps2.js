// maximum value

var userInput=prompt("enter digit here:");//12345
var max=userInput[0]
for(i=0;i<userInput.length;i++){
    if(max<userInput[i]){
        max=userInput[i];
    }
}
console.log(max,"is highest number");

//minimum value

var userInput=prompt("enter a digit here");//123450
var min=userInput[0];
for(i=0;i<userInput.length;i++){
    if(min>userInput[i]){
        min=userInput[i];
    }
}
console.log(min,"is lowest number");


// sum of minimun & maximum value

var userInput=prompt("enter a digit here");//12345
var min=userInput[0];
var max=userInput[0];
for(i=0;i<userInput.length;i++){
    if(max<userInput[i]){
        max=userInput[i];
    }
    if(min>userInput[i]){
        min=userInput[i];
    }
}
console.log(max,"is highest value");
console.log(min,"is lowest value");
console.log(Number(min)+Number(max),"total sum");



