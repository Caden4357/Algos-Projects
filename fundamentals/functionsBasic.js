// old school javascript function still completely valid no problem using them 
function sayHi(name) {
    return "Good Afternoon " + name
}
console.log(sayHi("Caden"))

// ES6 syntax 
const sayHiES6 = name => "Good Afternoon " + name
console.log(sayHiES6("Jamie"))

// A tiny bit more advanced 

function sumOfEvenNums(arr) {
    var sum = 0
    for (i of arr){
        if (i % 2 == 0){
            sum += i
            // console.log(i)
        }
    }
    console.log(sum)
}
sumOfEvenNums([2,3,4,5,6,7,8])

const sumEvens = (arr) => {
    var sum = 0
    for (i of arr){
        if (i % 2 == 0){
            sum += i
        }
    }
    console.log(sum)
}
sumEvens([2,3,4,5,6,7,8])

const add = a => a + a
console.log(add(100))
