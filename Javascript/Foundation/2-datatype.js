"use  stricy "

let userName ="Aryan"
let userAge = 18 
let isUserLoggedIn  = true 
let userAddress ;
let userEmail = null 

console.table([userAddress , userAge , userName , isUserLoggedIn])


// Use  To see datatype of a Variable 

console.log(typeof userAge)   // First way to see the datatype 
console.log(typeof (userAge))  // Second way to  see the datatype  using the parentheses " (    ) "
console.log(typeof userAddress) 
console.log(typeof userEmail)


/*  

Output  
┌─────────┬───────────┐
│ (index) │ Values    │
├─────────┼───────────┤
│ 0       │ undefined │
│ 1       │ 18        │
│ 2       │ 'Aryan'   │
│ 3       │ true      │
└─────────┴───────────┘
number
number
undefined
object


*/

let a  = 15e2 ;
let b = 15e-2 ;
console.log(a);
console.log(b);
