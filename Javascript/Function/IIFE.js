console.log("Immediately Invoked Function Expression IIFE");


// executed immeditately  after definition 

(function userName(){ // name IIFE
    console.log(`UserName is Aryan`);
    
})(); // ; --> it is use to break the IIFE

(() => {
    console.log(`Username is Rahul`);
})() ;

( (name) => {
    console.log(`username is ${name}`);
    
})("Arun");