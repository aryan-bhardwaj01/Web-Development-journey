console.log("Relational Operator is on the way and return only true and false ");

console.log("in operator");

const userName = {
    name : "Ankit" ,
    age : 45 ,
    isLogin : true 
}

console.log("name" in userName);
console.log("accountType" in userName);


console.log("intanceof operator check th type of an object at run time ");

let userEmail = ["hk@example.com" , "io@example.com" , "4r@example.com"]
console.log(userEmail instanceof Object);
console.log(userEmail instanceof Array);
console.log(userEmail instanceof Number);




