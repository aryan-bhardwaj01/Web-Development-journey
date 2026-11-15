console.log("Function Expression is on the way ");
// function expression means storing a function inside a variable

const welcome = function () {
    console.log("Welcome to  Javascript");
    
}
welcome() ;

//  to store 

const calculateSum = function (a,b){
    return a+b ;
};
console.log(calculateSum(10,30));

// passing a callback

function hello(callback) {
    console.log("Hello");
    callback();
}

const myHello = function () {
    console.log("there");
    
};

hello(myHello);

// event handling 

// const button =  document.querySelector("button");

// button.addEventListener("click" , function(){
//     console.log("Button click hogya hai");
    
// });

