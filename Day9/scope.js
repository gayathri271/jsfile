//local scope 0r functional scope :
//In programming, local scope refers to the context within a program where a variable is defined
//and accessible only within a specific block, function, or method.

function local(){
    var a =10;
    console.log(a);
}
local()


//global scope:
// Global scope refers to the context in a program where a variable is accessible throughout the entire program,including inside all functions,
//  methods, or blocks. Variables declared in the global scope are known as global variables, and they exist for the lifetime of the program.

var b=20;
function global(){
    console.log(b); //it can be accessible inside function
}
global()
console.log(b); //it can be accessible outside function
// output:20 and 20


var a1=100;
function a2(){
    var a1=200;
    console.log(a1);//as a1 is functional/local scope it executes 200
}
a2()
console.log(a1);// as a1 is outside the function so it is global variable it executes 100
//output is 200 and 100


var b2 = 200;
function b1(){
    var b2=100;  
    console.log(b2); //The console.log(b2) statement inside the function refers to the local b2.
    
}
console.log(b2);//statement is outside function, so it refers to the global b2 and executed first
b1()//The b1 function is called,and the execution enters the function body.
//output will be 200 and 100


//when there is no variable in local scope it check the parent variable and excute the c1 as 200
function c(){
    console.log(c1); 
}
var c1=200;
c()


//the output will be undefined as the function called before the declaration of d variable
function d1(){
    console.log(d);   
}
d1()
var d=200;

//it work same as for nested function ,it checek for parent variable if there is no declartion in local scope.

function e(){
    var g=500;
    function k(){
        console.log(g+100);   //600
    }
    k()
}
var g=100;
console.log(g); //100
e()
//output:100 and 600

//by hoisting method it goes to top of the declaration in order to excute the function b6

var z = 400;
function y(){
    function n(){
        console.log(z+100);   //500
    }
    n()
}
y()
var z=100;
console.log(z); //100
// output is 500 and 100