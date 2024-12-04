var userInput=prompt("enter your age:")
if(userInput >=18){
    console.log("Eligible to vote");
}else{
    console.log("Not Eligible");
}

var gender =prompt("Enter your gender:")
var age=prompt("Enter your age:")
if(gender === "male"){
    if(age >=21){
        alert("Eligible for marriage");
    }else{
        alert("Not Eligible");
    }
}else if(gender === "female"){
    if(age >=18){
        alert("Eligible for marriage");
    }else{
        alert("Not Eligible");
    }
}

var age=20;

if(age >=18){
    console.log("eligible to apply driving license");
}else{
    console.log("Not Eligible apply driving license");
}
    
var userInput=prompt("Enter your attendance percentage")

if(userInput >=75){
    alert("student is eligible to appear for an exam")
}else{
    alert("student is not eligible to appear for an exam")
}

var age=65;
if (age >=60) {
    console.log("person qualifies for a senior citizen discount");
}else{
    console.log("person not qualifies for a senior citizen discount");
}


