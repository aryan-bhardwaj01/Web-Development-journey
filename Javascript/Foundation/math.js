console.log("Maths is on the way");

console.log(Math);
console.log(Math.abs(-10)); // give +ve value only change -ve to  +ve 
console.log(Math.round(10.4)); // 10
console.log(Math.round(10.5)); // 11

console.log(Math.ceil(10.1)); // it always choose the above number when it found number is greate even a point 11
console.log(Math.floor(10.9)); // always choose the lower number 10
console.log(Math.fround(10.9)); // 10.899999618530273
console.log(Math.fround(10.1));

console.log(Math.min(10,20,30,5));
console.log(Math.max(10,20,3,50));


console.log('\n');

// Math.random only give the value under 0 to 10 ;
console.log(Math.random()); // 0.7998042167311932
console.log((Math.random()*10) + 1);  // 9.771579529137568
console.log(Math.floor((Math.random()*10) + 1)); // 4

//  formula to get min and max value 

const min = 50 ;
const max = 100 ;

console.log(Math.floor(Math.random()*(max-min + 1) + min)); // 56





