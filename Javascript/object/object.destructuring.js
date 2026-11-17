console.log("Object destructuring is on the way ");

const instagram = {
    userName : "Ankit",
    isLogedIN : true ,
    userEmailId : "xyz@example.com"
}

// destructuring

const {userEmailId} = instagram ;
console.log(userEmailId);
// if we want to use the custom name then 

const {userEmailId : email} = instagram ;
console.log(email);

