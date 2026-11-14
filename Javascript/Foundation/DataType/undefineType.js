//-> when we declare the variable but not  initialized or assigned any value

let car ;
console.log(car);

// undefined in object
const price = { name: "BMW"}
console.log(price.type);

// undefined in function

function carName(carBrand){
    console.log(`this ${carBrand}`);
    
}

x = carName("BMW")
console.log(`x is ${x}`);