// let num=[15,29,56,33]
// let grt=num.every(num=>num<20)
// console.log(grt);

// let cart = [{ name: 'Laptop', inStock: false }, { name: 'Phone', inStock: true }];
// let allInStock = cart.every(product => product.inStock);
// console.log(allInStock); 


// let num=[1,3,4,5]
// let first=num.fill(8)
// console.log(first); 

// let num =[1,2,3,4,5]
// let a=num.filter(x=>x % 2 != 0)
// console.log(a,"odd numbers");


// let a=["apple","banana","cherry"]
// let b = a.filter(x=>x.length>4)
// console.log(b);

// let products = [
//     { name: 'Laptop', price: 900 },
//     { name: 'Phone', price: 80 },
//     { name: 'Tablet', price: 300 }
//   ];
// let pro=products.filter(product=>product.price>100)  
// console.log(pro);

// let products = [
//     { name: 'Laptop', inStock: true },
//     { name: 'Headphones', inStock: false },
//     { name: 'Phone', inStock: true }
//   ];
//   let availableProducts = products.filter(product => product.inStock);
//   console.log(availableProducts); 
  

// let c=[
//     {name:'Gayathri' ,number:12345},
//     {name:'Gowthami',number:23456}
// ];
// let h=c.find(use=>use.name=='Gayathri')
// if(h){
//     console.log(h,"is present");
// }else{
//     console.log(h,"is not present");
// }

// let useremail=prompt("enter your email id:")
// let userpassword=prompt("enter your password:")
// let users=[
//     {Email:"Gayathri27@gmail.com",
//         password:"Gayathri27"
//     },
//     {
//         Email:"chethan17@gmail.com",
//         password:"chethan17"
//     }
// ];
// let u=users.find(a=>a.Email==useremail && a.password==userpassword)
// if(u){
//     console.log("login successfull");
//     alert("login successfull")
    
// }else{
//     console.log("user not found");
//     alert("user not found")
    
// }

// let ar1=[
//     {
//         Email:"chethan17@gmail.com",
//         password:"chethan17"
//     },
//     [1,2,4],[{
//         Email:"Gayathri27@gmail.com",
//         password:"Gayathri27"
//         }]
// ]
// let b=ar1.flat(Infinity);
// console.log(b);

// let b=[2,6,"banana"]
// console.log(b.includes(6));

// let num1=[2,6,8]
// let num2=num1.map(a=>a*2)
// console.log(num2);
// let num2=[2,7,8,9]
// let num3=num2.map(x=>x/2)
// console.log(num3);
// let v=[1,2,3,4]
// let y=v.map(a=>a>2)
// console.log(y);
