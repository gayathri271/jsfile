// Create an object person with properties firstName, lastName, and age. Then:
// Access and print the firstName property.
// Add a new property city with the value "New York" and print the updated object.



var details={
    obj1 :"Gayathri",
    obj2 : "Ratlavath",
    age :27
}
console.log(details.obj1);
details.city="Hyderabad";
console.log(details);


// Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object.


var data ={
    name : "Jeans",
    price : 2000,
    instock :5
}
console.log(data);
data.price = 3000;
delete data.instock;
console.log(data);


// Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.
// Delete the mystery genre from the object.



var library={
    fantasy:{
        books:["harrypoter","end with us","start with us"]
    },
    mystery:{
        books:["godfather","secret"]
    }
}
library.scienceFiction={
    books:["numerology","gravity"]
}
console.log(library);
delete library.mystery;
console.log(library.fantasy.books[0]);


// Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.


var user={
    username:"Gayathri",
    email:"gayathri27@gmail.com",
    address:{
        city:"Hyderabad",
        state:"Telangana",
        zip:500098
    }
}
console.log(user);
Object.freeze(user) ;//the object.freeze() static method freezes an object .Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
user.email="ratlavath27@gmail.com" ;
console.log(Object.isFrozen(user));
user.phone=9876543210;
console.log(user);


// Create an object car with properties make, model, and price. Then:
// Seal the object using Object.seal().
// Try to delete the make property and check if the object is sealed using Object.isSealed().
// Modify the price property, and check if the object is still extensible using Object.isExtensible()


var car ={
    make:"mahindra",
    model:"xuv700",
    price:1200000
}
console.log(car);
Object.seal(car);
delete car.make;
console.log(Object.isSealed(car));
car.price=1500000;
console.log(Object.isExtensible(car));








