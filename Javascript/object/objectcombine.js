console.log("Object Combine is on the Way ");

const userName = {
    user1 : "Rahul",
    user2 : "Aryan" ,
    user3 : "Anuj"
}

const userAge = {
    userAge1 : 10 ,
    userAge2 : 10 ,
    userAge3 : 10 
}
// in here we have target and source so  target is userName and source is UserAge and here userName is modifed to save this we use an empty object as target  
const combineObject = Object.assign(userName , userAge);
console.log(combineObject);
console.log(userName);

// here is an example 

console.log("Using an Emoty Object :- ");


const userName1 = {
    user1 : "Rahul",
    user2 : "Aryan" ,
    user3 : "Anuj"
}

const combineObject1 = Object.assign({} ,userName1 ,userAge);
console.log(combineObject1);
console.log(userName1); // see the difference 

// most use 
// spreadOperator

console.log('Using SpreadOperator');

const combinerObjecy3 = {...userName1 ,...userAge};
console.log(combinerObjecy3);

// from the data we get the array of object 

const arrayOfObject = [
    {

    },
    {

    }
]

// accing using key

console.log(Object.keys(userName1)); // type is array 
console.log(Object.values(userName1)); // type is array 
console.log(Object.entries(userName1)); // every key and value convert into an array




