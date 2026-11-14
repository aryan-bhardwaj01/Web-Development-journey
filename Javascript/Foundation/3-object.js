// Singletone Object
const instagram = new Object()


// Non - Singletone Object 

// const  instagram = { }  


instagram.id = "123xcv"
instagram.name = "Arun"
instagram.isloggedIn = false;



// console.log(instagram)         //But they have same output that is { }

/*
 
Output is  :=   { id: '123xcv', name: 'Arun', isloggedIn: false }

*/


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// ------------------------------ Object -> Object 

// To access the Value us the (  .  ) notation 

const regualaruser = {
    email: "xcv@google.conm",

    userName: {
        firstName: "Aryan",
        lastName: "Bhardwaj"
    }

}

/*    

console.log(regualaruser.personalDetail)   //  Ouput ->  { userName: { firstName: 'Aryan', lastName: 'Bhardwaj' } }

console.log(regualaruser.personalDetail.userName)  // Output->  { firstName: 'Aryan', lastName: 'Bhardwaj' }

console.log(regualaruser.personalDetail.userName.firstName)   //Output -> Aryan 

*/

/*
 
console.log(regualaruser.personalDetail?.userName.firstName) 
 
it is Optional Chaining { ? } which act like a condition if it is there then do that else  do that  used in API 
 
 
*/


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// ------------------------    Object Combination  

// ----->  Using assign 

const object1 = { 1: "a", 2: "b" }
const object2 = { 3: "c", 4: "d" }

/* 

const object3 = {object1 , object2}    

Ouput -> { object1: { '1': 'a', '2': 'b' }, object2: { '3': 'c', '4': 'd' } } Object inside Object

*/

/**
 
const object3 = Object.assign(object1 , object2)  

Output -> in this the object1  will consider as the target and object 2  will consider as the  sources so  all the key and value will go to the object1  

*/

/*

const object3 = Object.assign({} , object1 , object2)

Ouput -> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } in this the empty object is the target now   , and it is optional but consider as a good practices 

*/



// --------------------->  Using the spread  opreator 

const object3 = { ...object1, ...object2 }  // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(object3)



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* 

When the values comes form the database it will on the Array of Object 

*/

const user = [

    {
        id: 1,
        email: "xcv@google.com"
    },

    {
        id: 2,
        email: "zxc@google.com"
    },

    {
        id: 3,
        email: "bnm@google.com"
    },
]

console.log(Object.keys(instagram))
//      { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
//       [ 'id', 'name', 'isloggedIn' ]   data type is Array

console.log(Object.values(instagram))
//     { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }  
//     [ '123xcv', 'Arun', false ]   data type is Array 

console.log(Object.entries(instagram))   
// You will get  data Array in Array 
// [ [ 'id', '123xcv' ], [ 'name', 'Arun' ], [ 'isloggedIn', false ] ]

console.log(Object.hasOwnProperty('name'))
// When  we try to  loop the data we get from the data based and if any value is not there then i will crash it so  we used check if has or not
// data type id boolen  and Output is ->  true 