// Question 11: Shopping Cart Operations

var a=["Milk", "Bread", "Eggs", "Butter"];
console.log(a);
console.log(a.indexOf("Eggs"));
a[2]="Cheese"
console.log(a);
b=a.unshift("juice")
console.log(a);

// Question 10: Rearrange and Combine Names
A1= ["Alice", "Bob", "Charlie"] ;
A2= ["David", "Eve"];
console.log(A1);
console.log(A2);
A3=A1.reverse(); //reversed A1
console.log(A3);
A4=A3.concat(A2);
console.log(A4);
A4.unshift("Frank")
console.log(A4)

// Question 9: Shopping Cart Operations

var m= ["Milk", "Bread", "Eggs", "Butter"]
console.log(m);
console.log(m.includes("Eggs"));
m1=m.pop()
console.log(m);
m2=m.push("Cheese","juice")
console.log(m);

// Question 8: Length-Based Manipulation

var num=[1, 2, 3, 4, 5]
console.log(num)
num.shift()
console.log(num)
num1=num.push(6,7)
console.log(num)
num2=num.length
console.log(num2);

// Question 7: String Operations on Names

var st="John,Doe,Jane,Smith"
console.log(st);
st2=st.split(",")
console.log(st2);
console.log(st2.includes("Jane"));
console.log(st2.reverse().join(" "));

// Question 5: Extract Favorite Movies

var mov= ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"]
console.log(mov);
mov1=mov.slice(1,4)
console.log(mov1);
mov2=["The Matrix", "The Godfather"]
mov3=mov1.concat(mov2)
console.log(mov3);
console.log(mov3.reverse());

// Question 3: Create a Playlist

var son1=["Song1", "Song2", "Song3"]
var son2=["Song4", "Song5"]
console.log(son1);
console.log(son2);
son3=son1.concat(son2)
console.log(son3);
son4=son3.slice(3,5)
console.log(son4);
son5=son4.push("Song6")
console.log(son4);


// Question 2: Generate a Sentence

var n= "Learn,Practice,Improve"
console.log(n);
n1=n.split(",")
console.log(n1);
n2=n1.reverse()
console.log(n2.join(" "));


// Question 1: Manage a Guest List

var b=["Alice", "Bob", "Charlie", "David"]
console.log(b);
c=b.unshift("Guest")
console.log(b);
d=b.pop()
console.log(b);
console.log(b.includes("Bob"));


// Write a code snippet to find the length of an array.
var c=["Gayathri","Mounika","Deepika"]
console.log(c);
h=c.length
console.log(h);

// How do you add an element to the end of an array?

c.push("lalli")
console.log(c);

// How do you remove the last element from an array?

k=c.pop()
console.log(c)

// How do you add an element to the beginning of an array?

j=c.unshift("pandu")
console.log(c);

// How can you remove the first element from an array?

g=c.shift()
console.log(c);

// How do you reverse the elements in an array?

f=c.reverse()
console.log(f);

// How can you find the index of a specific value in an array?

var d=c.indexOf(2)
console.log(d);


// How can you check if a certain value exists in an array?

s=c.includes("Gayathri")
console.log(s);

// How can you sort the elements of an array in ascending order?

var i =[2,9,33,8]
console.log(i);
console.log(i.sort());

// How can you convert an array to a string using commas as separators?

var u =["chethan" ,"Gowthami"]
console.log(u.join(","));


// Write a code snippet that adds an element to the end of an array, then removes the first element.

var y = [3,9,8,5,4,1]
console.log(y);
t=y.push(0)
console.log(y);
r=y.shift()
console.log(y);

// How can you reverse an array and then join the elements into a string?

var e=["lalli","mounika"]
console.log(e.reverse().join(""));

// Write a code that first sorts an array in ascending order, then removes the last element.

var w = [20,2,68,94,3]
console.log(w);
q=w.sort()
console.log(q);
q.pop()
console.log(q);


// How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?

var h =[2,3,4,5,6,7,8]
console.log(h);
u=h.unshift(9,1)
console.log(h);
h.shift()
console.log(h);
console.log(h.length)


// How do you combine two arrays, sort the combined array, and then remove the last element?

var r = ["Gayathri" , "Gowthami" ,"Chethan"]
var t = ["Geetha" , "Shiva"]
y=r.concat(t)
console.log(y);
e=y.pop()
console.log(y)

































