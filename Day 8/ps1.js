// Task:-- 
// Write a program to print
// 1-10
// 10-1
// -1 to -10
// -10 to -1
// Using while loop and
// Print even numbers and odd numbers using while loop and take userInput
//  and print sum of even and sum of odd numbers from userInput


var a=1;
while(a<=10){
    console.log(a);
    a++ ;
}

var b=10;
while(b>=1){
    console.log(b);
    b--;
}

var c=-1;
while(c>=-10){
    console.log(c);
    c--;
}

var d=-10;
while(d<=-1){
    console.log(d);
    d++;
    
}

// var userInput=prompt("enter a digit:");//12345
// var i =0;
// while(i<userInput.length){
//     if (userInput[i] % 2 == 0) {
//         console.log("even number");
//         i++; 
//     }else{
//         console.log("odd number");
//         i++;
//     }
// }


var userInput=prompt("enter a digit:")
    var i =0;
    var sumEven=0;
    var sumOdd=0;
    while(i<userInput.length){
        if (userInput[i] % 2 == 0) {
            sumEven+=Number(userInput[i]);
    // console.log(sumEven,"sum even");
            i++;
        }else{
            sumOdd +=Number(userInput[i]);
    // console.log(sumOdd,"sum odd");
            i++
        }
    }
    console.log(sumEven,"sum even");
    console.log(sumOdd,"sum odd");

    

