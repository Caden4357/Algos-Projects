// * DATA TYPES 

// Strings 
var myString = "This is my string"

// Number 
var myNum = 900 

// Boolean
var myBool = false 

// undefined 
var noValue = undefined

// console.log(noValue)
// console.log(myString)

const myArray = [4,3,"Caden",true]

const myCrazyArray = [4,3,"Caden",true, [0,2,4,6], {name:"Billy", email:"Billy@go.com", age:25}]


console.log(myArray[2])

const myObject = {name: "Veggie Pizza", toppings: ["Cheese", "Mushrooms", "Olives", "Peppers", "Artichoke"], sauce: "Classic Tomato"}

// console.log(myObject['toppings'])
// Destructuring only works on objects the names in {} need to match the keys in the object the name on the right of the = sign is the name of the object we are destructoring 
const {name, toppings} = myObject
console.log(toppings)
// console.log(typeof(myString))

const num = myNum
// num += 3
const arr = myArray
arr.pop()
// console.log(myNum)
console.log(myArray)
console.log(arr)
// console.log(num)

