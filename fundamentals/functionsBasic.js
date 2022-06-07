// old school javascript function still completely valid no problem using them 
function sayHi(name) {
    return `Good Afternoon ${name}`
}
console.log(sayHi("Bob"))

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


// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
// let myNumber = 42;
// let myName = "Caden"
// function setSwap() {
//     if(myNumber===42){
//         temp = myNumber
//         myNumber = myName
//         myName = temp
//     }
//     else{
//         temp = myName
//         myName = myNumber
//         myNumber = temp
//     }
// }
// setSwap()
// console.log(myName, myNumber)


function count() {
    for (var num = -52; num <= 1066; num++){
        console.log(num)
    }
}
count()

function beCheerful() {
    for (var i = 1; i <= 98; i++){
        console.log("Good Morning!"+i)
    }
}
beCheerful()

function multiplesOfThree() {
    for (var i = -300; i <= 0; i+=3){
        if (i === -6){
            continue
        }
        if (i === -3){
            continue
        }
        else{
            console.log(i)
        }
    }
}
multiplesOfThree()

function printWithWhile() {
    let num = 2000
    while(num<5281){
        console.log(num)
        num++
    }
}
printWithWhile()

function birthday(num1, num2) { 
    let month = 09
    let day = 19
    if (num1 === month && num2 === day){
        console.log("how did you know?")
    }else if (num2 === month && num1 === day){
        console.log("how did you know?")
    }
    else{
        console.log("Just another day!")
    }
}
birthday(19,09)

