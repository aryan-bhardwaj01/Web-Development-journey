console.log("String DataType ")

// --->> Create string using  Literals 
console.log("Using literals");

let s1 = 'abcd' ;
console.log(s1);

let s2 = "abcd" ;
console.log(s2);


// Using Constructor 

console.log("Using Constructor");

let s3 = new String('abcd') ;
console.log(s3);


//  using Template Literals ( `  )

let a = 'aryan' ;
let b = `Hello Everyone I'm ${a} ` ;

console.log(b);

// empty string 

let c = "";
console.log(c);
console.log("above is a empty  string ");

// multiple string :-  preserving the line breaks within the string 

let multiString = ` hello  Everyone , 
                    i'm ${a} Bhardwaj 
                    what's going on  `
                    
console.log(multiString);

// hello  Everyone , 
//                     i'm aryan Bhardwaj 
//                     what's going on  