// var userInput=prompt("enter a number:")
// // console.log(userInput);
// for(i=0;i<userInput.length;i++){
//     if (userInput[i] % 2==0) {
//         console.log("userInput[i],even number");
//     }else{
//         console.log("userInput[i],odd number");
//     }
// }

// var userInput=prompt("Enter a digit:")
// var sumeven=0;
// var sumodd=0;
// for(i=0;i<userInput.length;i++){
//     if(userInput[i] % 2 == 0){
//         sumeven+=Number(userInput[i]);   
//         // console.log(sumeven,"even number");
//     }else{
//         sumodd+=Number(userInput[i]);
//         // console.log(sumodd,"odd number");
//     }  
// }
// console.log(sumeven,"even number");
// console.log(sumodd,"odd number");


var userInput=prompt("enter a digit");//12345
var proEven=1;
var proOdd=1;
for(i=0;i<userInput.length;i++){
    if(userInput[i] % 2 == 0){
        proEven*=userInput[i];
    }else{
        proOdd*=userInput[i];
    }
}
console.log(proEven,"even number");
console.log(proOdd,"Odd number");

