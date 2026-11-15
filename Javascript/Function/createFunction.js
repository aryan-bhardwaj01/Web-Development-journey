console.log("Function is on the way ");

//  adding two number 

function addTwoNumber(a ,b){
    return a + b ;
}
const result = addTwoNumber(5,2);
console.log(result);
console.log(addTwoNumber(10, 20));

function sumOfTwo(a , b ){
    console.log(`sum :- `,a+b);
}
sumOfTwo(20,30);
const sum = sumOfTwo(20,30);
console.log(sum); // undefined because this function is not returning something is printing

function isUserLogin(name){
    return `${name} is login `
}
console.log(isUserLogin("Ankit"));


function userName(name) {
    return "Hello" , name ;
}
console.log(userName("ankit")); // why only ankit because comma works different in js it consider two expression1  , expression2 it evaluate both but return the second 

function myNumber(){
    return 10,20,30 ;
}
console.log(myNumber()); // 30 

// we have use the template literals  or +

