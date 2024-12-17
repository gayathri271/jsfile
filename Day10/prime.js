// Prime numbers program

var userInput=+prompt("enter digit here :");//4
 var count=0;//1
for(i=1;i<=userInput;i++){
    if(userInput % i==0){
        count++;
    }
}
if(count==2){
    console.log(userInput,"is a prime number");
}else{
    console.log(userInput,"not a prime number");
}

