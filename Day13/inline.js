let dogimage=document.getElementById("two");
dogimage.onclick= function(){
    dogimage.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2yRRDxZONapKU9Sww1NGRIo6u5M7NeoeSw&s"
    dogimage.innerHTML="<p>Event Binding</p>"
}


let imgcat=document.getElementById("one");
function image(){
    imgcat.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzo24zi-7rQlDVwGrrm4Q7ZxGurNWCD4G4A&s"
}


let leaved=document.getElementById("bt");
function leave(){
    leaved.style.backgroundColor="yellow"

}

let down=document.getElementById("in");
down.onkeydown=function(){
    down.style.backgroundColor="lightcoral"
}


let ups=document.getElementById("up");
ups.onkeyup=function(){
    ups.style.backgroundColor="pink"
}


let pressed=document.getElementById("press")
pressed.onkeypress=function(){
    pressed.style.backgroundColor="lightblue"
}

let pTags=document.querySelectorAll("p");
// pTags[0].style.backgroundColor="red"

for (i=0;i<pTags.length;i++){
    pTags[i].style.backgroundColor="lightblue"
}


// find the given number is odd or even without % operator 

 
a=+prompt("Enter a digit here:")   //23
b=a/2                   //off the number   11.5
console.log(b);
c=Math.floor(b);          //11
console.log(c);
console.log(c+c);    //22

if(a==(c+c)){
    console.log("even number"); 
}else{
    console.log("odd number");
    
}


