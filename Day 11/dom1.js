// 1.change the color, bgcolor, padding , border-radius, box-shadow to the element 
// which you get from html file by  DOM when user clicks that element 
// and do repeat the process for double click and on hover means need 3 code examples 


let h1Tag=document.getElementById("a");
console.log(h1Tag);
function oneclick(){
h1Tag.style.backgroundColor="red"
h1Tag.style.color="white"
h1Tag.style.padding="40px"
h1Tag.style.borderRadius="5px"
h1Tag.style.boxShadow="5px 5px lightgray"
h1Tag.textContent="Welcome"
}


let h2Tag=document.getElementById("b");
console.log(h2Tag);
function doubleclick(){
  h2Tag.style.backgroundColor="yellow"
  h2Tag.style.Color="White"
  h2Tag.style.padding="50px"
  h2Tag.style.borderRadius="5px"
  h2Tag.style.boxShadow="5px 5px lightgray"
  h2Tag.style.textContent="Good Morning"
}

let h3Tag=document.getElementById("c");
console.log(h3Tag);
function hoverclick(){
  h3Tag.style.backgroundColor="pink"
  h3Tag.style.Color="White"
  h3Tag.style.padding="50px"
  h3Tag.style.borderRadius="5px"
  h3Tag.style.boxShadow="5px 5px lightgray"
  h3Tag.style.textContent="Bye will meet soon"
}


















