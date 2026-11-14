console.log("Loop In Array is on the way ");

// for 
console.log(`Applying for loop on Array :- `);

let language = new Array("Python", "java", "c++", "Go", "Javascript", "NodeJs");

for (let lan = 0; lan < language.length; lan++) {
    console.log(language[lan]);

}

console.log('\n');

// for of
console.log("Apply for of Loop on Array :- ");
for (const lan of language) {
    console.log(lan);

}

console.log('\n');

// for each 
console.log(`Apply for each  loop on Array`);
language.forEach(function (lan) {
    console.log(lan);
});

console.log('\n');

// for in 

console.log(`Apply for in loop on Array`);

// this loop while give you the index not the value
for (const lan in language) {
    console.log(lan);
}
// this loop while give you the index in a string  [ ' 0 ']  like
for (const lan in language) {
    console.log([lan]);
}
// this loop while give you the value
for (const lan in language) {
    console.log(language[lan]);
}
