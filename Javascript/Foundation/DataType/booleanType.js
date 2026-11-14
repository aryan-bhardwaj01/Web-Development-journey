console.log("Boolean DataType ");

//---> objects , array and nont-empty string are generally called the truthy values 
console.log("truthy Value ");
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean("Hi"));


// --> like zero , null , undefined , NaN , empty string are generally called the falsy values 

console.log("falsy Value ");

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));


//--> boolean as object 
console.log("Boolean as Object");

let obj = new Boolean(false)
console.log(obj);
console.log(typeof obj );
console.log(Boolean(obj));




