console.log("Adding and Removing Element from Array");

//  two  methon 
// push -> at the end of the array
// unshift -> to the starting of the array

let language = ["javascript", "C++", "Java"]
console.log(`Before adding :- ${language}`);

language.push("CSS");
language.unshift("Python");
console.log(`After adding :- ${language}`);


// three method 
// pop() -> remove element from the last
// shift() -> remove element from the first
// splice() ->remove and replace
language.pop();
console.log(`USing Pop() :- ${language}`);
language.shift();
console.log(`Using shif() :- ${language}`);

language.push("CSS");
language.unshift("Python");

// using shift  

console.log(` Syntax
array.splice(startIndex, deleteCount, item1, item2, ..., itemN)`);

// removing 

console.log(language);

language.splice(1, 2, "Go");
console.log(`Using the slice() :- ${language}`);

//  increase and decrease the Array length 

language.length = 10;
console.log(`After increasing the length :- ${language} `);

language.length = 3 ;
console.log(`After Decreasing the length :- ${language}`);
