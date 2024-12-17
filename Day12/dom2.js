let data=[
    {
        id:1,
        Name:"Surya",
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThch0OH8m5e7Ycf1F4jSG79O10-ALYfnd1jw&s"
    },
    {
        id:2,
        Name:"Nani",
        Image:"https://i.pinimg.com/236x/43/ac/5d/43ac5d86d43d3e26cf566a96d0cb17b2.jpg"
    },
    {
        id:3,
        Name:"Prabhas",
        Image:"https://w0.peakpx.com/wallpaper/112/617/HD-wallpaper-hero-prabhas-formal-hero-prabhas-prabhas-hero-telugu-actor-thumbnail.jpg"
    }
]


let cardContainer=document.getElementById("cardcontainer1")
cardContainer.style.display="flex"
cardContainer.style.justifyContent="center"
cardContainer.style.flexWrap="wrap"
cardContainer.style.margin="30px"
cardContainer.style.gap="30px"

for(i=0;i<data.length;i++){
    const colors=["pink","lightgray","lightcoral"];
    let card = document.createElement("div")
    card.innerHTML=`
                        <img src='${data[i].Image}'width="100%" height="300px"/>
                        <p>${data[i].id}</p>
                        <p id="p1">${data[i].Name}</p>`
    card.style.width="350px"   
    card.style.border="2px solid black"  
    card.style.backgroundColor=colors[i]    
    let a=card.querySelectorAll("p");
    for(k=0;k<a.length;k++){
        
        a[k].style.fontWeight="bold"
    }

cardContainer.appendChild(card)
}
