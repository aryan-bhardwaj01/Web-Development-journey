console.log("Arrow Function is on the way ");

//  arrow way is another way to write function 

const welcome =  function () {
    console.log("Welcome to Javascript");
}

welcome() ;

// arrow function 

const welcomeMessage = () => {
    console.log("Welcome to Arrow  Function");
}

welcomeMessage() ;

const calculateSum = (a,b) =>{
    return a+b ;
}
console.log(calculateSum(10,20));

//  implict Arrow function 

const sumOfTwo = (a,b) => (a +b);
console.log(sumOfTwo(30,50)); 

// with the curly { } , we need to write return 

const sum = (a,b) => ({user : "ankit"})
console.log(sum(100,200));

console.log("Using This from now");


// this  

const accountDetails = {
    userName : "Ankit" ,
    isLogin : true ,
    userEmail : "xyz@example.com" ,
    myFunction : function () {
        console.log(`${this.userEmail} , this is your Email`);
        console.log(this);
    }
}
accountDetails.myFunction();
accountDetails.userName = "Rahul" ;
accountDetails.myFunction();

console.log("Apply this out side");
console.log(this); // {}

console.log("Apply this on the Function :- ");

function outsideTHis() {
    let userName = "Arun" ;
    console.log(this.userName); // undefined 
}

outsideTHis()

console.log("Second this ");
const secondOutSideThis = function () {
    let userName = "Anuj";
    console.log(this.userName);
    console.log(this);
    
}

secondOutSideThis(); // undefined 

console.log("third this ");

const thirdOutSideThis = () => {
    let userName = "Alok"
    console.log(this.userName);
    console.log(this); // {}
    
}

thirdOutSideThis()