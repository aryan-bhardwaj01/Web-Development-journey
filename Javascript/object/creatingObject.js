// singleton  made through constructor

// object literals 

// non singleton 
const mySymbol = Symbol("key1")

const userDetails = {
    name: "Ankit",
    // mySymbol: "mykey1" ,  // not a correcr way we want to use it for mySymbol
    [mySymbol] : "myKey2" ,
    isLogin : true ,
    userAddress : "jss" 
   
}

console.log(userDetails.name);
console.log(userDetails["name"]); // use this 
console.log(userDetails[mySymbol]);
console.log(typeof userDetails[mySymbol]); // string but it is symbol 


// changing  

userDetails.name = "Arun" ;

// to lock a object we use Freeze 

// Object.freeze(userDetails)
userDetails.name = "Rahul"
console.log(userDetails);

userDetails.welcome = function () {
    console.log("Welcome");
}

userDetails.welcome2 = function () {
    console.log(`Welcome ${this.name}`);
    
}
console.log(userDetails.welcome());
console.log(userDetails.welcome2());

