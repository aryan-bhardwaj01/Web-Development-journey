console.log("Date and Time is on the way ");

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString()); // Sun Nov 15 2026 
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

//  month start from the 0 -> jan in array 
// decleared Date 

let customDate = new Date(2025,5,8);
let customDateTime = new Date(2025 , 5 , 8 , 3 , 2 , 46);
console.log(customDate.toDateString());
console.log(customDateTime.toLocaleString());

// in a format yyyy-mm-dd
let customFormat = new Date ("2025-05-08")
// mm-dd-yyyy
let customFormat2 = new Date("05-06-2025")
console.log(customFormat.toLocaleString());
console.log(customFormat2.toLocaleString());

// timestamp use in quiz , games , leaderboard 

let myTimeStamp =  Date.now();
console.log(myTimeStamp);

console.log(customFormat2.getTime());
console.log(customFormat2.getDate());
console.log(customFormat2.getDay());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000)); //  to convert into seconds 



let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate);









