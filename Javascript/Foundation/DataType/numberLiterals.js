// Decimal 

let a = 33 ;
let b = 3.3 ;
console.log(a); // 33
console.log(b); // 3.3 

// Octal  when a Number start with 0  and digits smaller than 8  

console.log("Octal  Number Literals" );
let c = 0o65 ;
console.log(c);


//Binary  when a number start with the 0b adn 0B by 0 and 1 

console.log("Binary Number Literals");
let d = 0b11 ;
let e = 0B0110 ;

console.log(d);
console.log(e);

// Hexadecimal  when a number start with  0x and 0X , digit belonging to :-  0123456789ABCDEF 

console.log("Hexadecimal Number Literals ");

let y = 0xAB2 ;
let z = 0XCD1 ;

console.log(y);
console.log(z);

// --->>> Number Coercion  

// UnDefine  to  NaN 

console.log("Undefine  to NaN");


const p =  undefined + 10 ;
console.log(p);

// NULL to 0 

console.log("NULL to 0");

const f = null + 10
console.log("f") ;

// Boolean to Number 

//  if 1 for true and 0  for false 

console.log("Boolean to Number");

const num1 = true +10 ;
const num2 = false + 10 ;

console.log(num1);
console.log(num2);


// string to  number 

console.log("String to  Number");

const s1 = "Aryan" ;
const s2 = "100" ;

const number1 = Number(s1);
const number2 = Number(s2) ;

console.log(number1); // If the string cannot be parsed as a valid number, it returns NaN
console.log(number2);

