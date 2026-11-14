console.log("String Operations ");

//--> Length 

let a = "Aryan"
console.log(a.length) ;

// -- >> Accessing the Last Character of a String

console.log("Last Character of a String");

let b = "HelloEveryOneHowAreYou"
console.log(b.length-1);

// ---> String Concatenation

let s1 = "Hey "
let s2 = "everyone"

console.log("String Concationation :- " , s1+s2);


// -->> substring of a string 

// syntax :-  string.substring(startIndex, endIndex);

console.log("Substring ");
let sub = "Hey Everyone "

console.log(sub.substring(0,8 ));

// string search in JS 

let Name = "aryan bhardwaj " ;
console.log(Name.indexOf("bhardwaj "));

let Email = "user@example.com" ;
console.log(Email.indexOf('@'));
console.log(Email.substring(Email.indexOf('@')));


// -->>  string Replace 

let f = 'HTML' ;
let g = f.replace('HTML' , 'Javascript');
console.log(g);

console.log("Using regular expression");

let string1 = 'GeeksForGeeks is a CS portal.' +
    'In GeeksForGeeks we can learn multiple languages.' +
    'geeksForGeeks is a great place.';
let d  = string1.replace(/GeeksForGeeks/ , 'Javascript') // it use the first occurance only the first geeksforgeeks is change
console.log(d);

let e = string1.replace(/GeeksForGeeks/g , 'javascript') //  it will replace all .
console.log(e);


let t = "arun"
let y = new String ("arun" );

console.log(t == y) ;
console.log(t === y ); // false also check the type 
console.log(t.localeCompare(y) ); // lexicographically

