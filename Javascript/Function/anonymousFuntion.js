console.log("Anonymous Function is on the Way");

// A function which does not have a name 

const myName = function (){
    console.log("Aryan Bhardwaj");
    
}

myName(); // The function itself has no name, but the variable myName gives us a way to access and call it.


// using the  anonymous function one way when we poass a function into another function , and that function is called Callback Function 

setTimeout(function (){
    console.log("Callback Function :- Aryan Bhardwaj");
    
} , 3000 );

// anonymous function using arrow function 

let myArrow = () => {
    console.log(`Using Arrow function :- Aryan Bhardwaj`);
}

myArrow() ;


function welcome(callback){
    console.log("Welcome");
    callback();
}

welcome(function(){
    console.log("Aryan");   
});



// ----> Reset Operator 
// convert  data into packed 

function packedLanguage(...lan){
    return lan ;
}

console.log(packedLanguage("python" , "java" , "c++" , "javascript"));

function customPacked(lan1 , lan2 , ...lan) {
    return lan 
}
console.log(customPacked("Java" ,"Javascript" ,"Python" ,"GO" ,"C++")); // the first goes to the lan1 and lan2  and rest off all goes to lan 

// --> Using Object 

const userDetails = {
    userName : "Ankit" ,
    isLogin : true ,
    userEmail :  "xyz@example.com"
}

function userObject(objectInside){
    console.log(`User Name is : ${objectInside.userName} , User Email is :- ${objectInside.userEmail}`);
    
}
userObject (userDetails) ;

userObject({
    userName : "Rahul" ,
    isLogin : false ,
    userEmail : "abc@example.com"
})