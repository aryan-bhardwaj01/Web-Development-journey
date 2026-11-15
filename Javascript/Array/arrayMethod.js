console.log("Arrya Method is on the Way");

// combining and extracting Array

let languageYouLearn = new Array("python" ,"java" ,"c++");
let languageYouLeft = ["Nodejs" , "ExpressJs"]
console.log("Combining and Extracting Array");
console.log(languageYouLearn.concat(languageYouLeft));
console.log(languageYouLearn);
console.log(languageYouLeft);



// slice 

console.log("Slice Array not modify the orginal  array and return a shallow copy ");
console.log(languageYouLearn.slice(0,2));
console.log(languageYouLearn);

// flat

console.log("flat method is flattening nested array to a current depth and it is 1 ");

let language = ["python" ,["java",["c++" , "css"]] ,"Nodejs"];
let programmingLanguage = ["python" ,["java",["c++" , "css" ,["expressjs" ,"GO"]]] ,"Nodejs"];
console.log(language.flat(1));
console.log(language.flat(2));
console.log(programmingLanguage.flat(2));
console.log(programmingLanguage.flat(3));








