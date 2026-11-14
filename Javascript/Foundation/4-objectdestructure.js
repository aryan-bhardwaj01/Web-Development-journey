const car = {
    carName : "BMW" ,
    price : "10000000" ,
    owner : "Aryan" ,
    howMuchItCost : 500000 ,
}

car.carName 
// we can use this but every time we have to  write this whole sentense to make it syntax more clear we use another approach 

const {carName} = car 
console.log(carName)  // Output ->  BMW

const {howMuchItCost} = car 
console.log(howMuchItCost)  // // Output -> 500000

// if the key it too long then  we can make it shorter

const {howMuchItCost : Cost} = car
console.log(Cost) // Output -> 500000