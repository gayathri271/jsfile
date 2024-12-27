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


// var userInput=prompt("enter a digit");//12345
// var proEven=1;
// var proOdd=1;
// for(i=0;i<userInput.length;i++){
//     if(userInput[i] % 2 == 0){
//         proEven*=userInput[i];
//     }else{
//         proOdd*=userInput[i];
//     }
// }
// console.log(proEven,"even number");
// console.log(proOdd,"Odd number");


let data1=document.getElementById("ab");


let data=[
{
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    }
]
 
//  console.log(data);
//  for(i=0;i<data.length;i++){
//     console.log(data[i].address);
    
//  }
 

for(i=0;i<data.length;i++){
    let card=document.createElement("div")
    card.innerHTML=`
                            <p>${JSON.stringify(data[i].address)}</p>
     `
   console.log(data[i]);
   data1.appendChild(card)
}























