// take two strings with spaces at starting of one string and at the ending of another string remove the spaces 
// and concat the both string and convert the combined string into uppercase string


var a ="       Hello Everyone";
var b = "Welcome to JS       ";
c=a.trimStart()
console.log(c);
d=b.trimEnd()
console.log(d);
e=c.concat(d)
console.log(e.toUpperCase());


// Extract Middle Portion of the string and get the last index of char of extracted string and
//  Convert the portion to Lowercase

var f="good morning";
console.log(f)
g= f.slice(5,12)
console.log(g);
lin=g.slice(-1)
console.log(lin.toUpperCase())
console.log(g.toLowerCase());


// take a single char and concat string to that char and convert the resulted string to uppercase and 
// then extract the last second char 

var char="G"
var str="ayathri"
str1=char.concat(str)
console.log(str1);
console.log(str1.toUpperCase());
console.log(str1.charAt(6));


// we have 2 string and extract first 3 chars of first string and extra last 3 chars of another string and concat those 2 results together
// and first char and last char of the resulted concatinated string should as uppercase


var s1="gayathri"
var s2="ratlavath"
var s3=s1.slice(0,3)
console.log(s3);
var s4=s2.slice(6,9)
console.log(s4);
s5=s3.concat(s4)
console.log(s5);
var s6=s5.charAt(0).toUpperCase()+s5.slice(1,s5.length-1)+s5.charAt(s5.length-1).toUpperCase();
console.log(s6);



// You are given a string with extra spaces at the beginning and end.You need to trim the string, make the first and last characters uppercase, 
//  extract a specific part of the string, concatenate it with another string


var g ="     Hello everyone         "
ct=g.trim();
console.log(ct);
var d = ct.charAt(0).toUpperCase()+ct.slice(1,ct.length-1)+ct.charAt(ct.length-1).toUpperCase();
console.log(d);
k=g.slice(8,15)
console.log(k);
var h="welcome"
console.log(k.concat(h));

// "hello there , how are you " find the index of are word in the sentence

var st="hello there, how are you "
st1=st.split(" ")
console.log(st1);
console.log(st1.indexOf("are"));



















