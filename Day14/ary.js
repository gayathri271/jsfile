//Examples for map

let num1=[2,6,8]
let num2=num1.map(a=>a*2)
console.log(num2);

let num=[2,7,8,9]
let num3=num.map(x=>x/2)
console.log(num3);

let v=[1,2,3,4]
let y=v.map(a=>a>2)
console.log(y);

let z=[-1,8,-9,3,-6]
console.log(z.map(p=>p*(-1)));


//Examples of filters

let n =[1,2,3,4,5]
let k=n.filter(x=>x % 2 != 0)
console.log(k,"odd numbers");


let a=["apple","banana","cherry"]
let b = a.filter(x=>x.length>4)
console.log(b);

let products = [
    { name: 'Laptop', price: 900 },
    { name: 'Phone', price: 80 },
    { name: 'Tablet', price: 300 }
  ];
let pro=products.filter(product=>product.price>100)  
console.log(pro);

let p = [
    { name: 'Laptop', inStock: true },
    { name: 'Headphones', inStock: false },
    { name: 'Phone', inStock: true }
  ];
  let h = p.filter(prod => prod.inStock);
  console.log(h); 


//for each


let element=["apple","banana","orange"]
element.forEach(cart=>{console.log(cart);
});

var cars=[1,2,4,5,6]
cars.forEach(v=>{console.log(v);
});