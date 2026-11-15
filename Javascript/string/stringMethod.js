console.log("String Method is on the Way");

// slice 

let language = "Hey there , Aryan bhardwaj this side" ;

let firstSlice = language.slice(0 ,3);
let secondSlice = language.slice(4,12);

console.log(firstSlice);
console.log(secondSlice);

// substr() 
// syntax :- str.substr(start , length)

console.log(language.substr(13 , 3));
console.log(language.substr(13 ));
console.log(language.substr(-13)); // length + start 

let myUpper = "aryan bhardwaj";
console.log(`After converting it into upper :- ${myUpper.toUpperCase()}`);

let myLower = "ARYAN BHARDWAJ";
console.log(`After converting it into lower :- ${myLower.toLowerCase()}`);

//  indexOf 
// str.indexOf(searchVale , index);

console.log(`Searching there in language :- ${language.indexOf('there')}`);
console.log(`Searching class in language :- ${language.indexOf('class')}`); // return -1 because it is not there

console.log(`Replace Hey  to  Hi :- ${language.replace(/Hey/g , 'Hi')}`);

// trim used to remove the whitespace form the start and end 

let myTrim = "    GTA5     "
console.log(myTrim.trim());


// access characters 

console.log("Access Characters ");
console.log(language[1]);
console.log(language.charAt(1));

// sring camparison

let myComparison = new String ("GTA5");
let myComparison2 = "GTA5" ;
let  myComparison3 = "Hey" ;

console.log(myComparison == myComparison2);
console.log(myComparison === myComparison2);
console.log(myComparison.localeCompare(myComparison2));
console.log(myComparison.localeCompare(myComparison3));
console.log(myComparison3.localeCompare(myComparison));



