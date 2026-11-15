console.log("Number is On the Way ");

const pageNumber = 50 ;
console.log(pageNumber);

const pageNumber2 = new Number(60);
console.log(pageNumber2); // mention it is a number

console.log(pageNumber2.toString());
console.log(typeof pageNumber2.toString());
console.log(typeof pageNumber2);
console.log(typeof pageNumber);

// using fixed 

const keyboardPrice = new Number(850.005);
console.log(keyboardPrice.toFixed(3));
console.log(keyboardPrice.toFixed(2));
console.log(keyboardPrice.toFixed(1));

// precision used get precisied value but based on the number of the digit 

console.log("\n");


const number = 25.56 ;
console.log(number.toPrecision(4));
console.log(number.toPrecision(3));
console.log(number.toPrecision(2));
console.log(number.toPrecision(1));

console.log("\n");

const number2 = 100000000 ;
console.log(number2.toLocaleString()); // use comma based on the usa standard
console.log(number2.toLocaleString('en-IN')); // use comma based on the India standard


