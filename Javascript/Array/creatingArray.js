console.log("Array is on the Way ");

// creating array  using literals 

let a  = [10,20,30,5,0,16]
console.log(a);

// creating array using constructor 
console.log("using constructor");

let b = new Array(10,2,4,3,45,6);
console.log(b);


//  Operation on the Array 
console.log("apply operation on Array");

console.log(a[0]);
console.log(a[2]);

console.log(`Arrya length is:- ${a.length}`);
console.log(`Array last elment is :- ${a[a.length -1] }`);
console.log("Modify Array");
a[1] = 1000 ;
console.log(`Array after Modify :- ${a}`);

