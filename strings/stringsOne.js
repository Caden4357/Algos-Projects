// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
const removeBlanks = (str) => {
    var output = ""
    for (var i = 0; i < str.length; i++){
        if (str[i] != " "){
            output+=str[i]
        }
    }
    console.log(output)
}
removeBlanks(" Pl ayTha tF u nkyM usi c ")
removeBlanks("I can not BELIEVE it's not BUTTER")


// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

const getDigits = (str) => {
    let output = ""
    for (var i = 0; i < str.length; i++){
        if (!isNaN(str[i])){
            output += str[i]
        }
    }return output
}
console.log(getDigits("abc8c0d1ngd0j0!8"))

// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().
// ! THIS NEEDS WORK WITH MANY EDGE CASES 
const acronym = (str) => {
    let output = ""
    output += str[0].toUpperCase()
    // console.log(output)
    for (var i = 1; i < str.length; i++){
        if (str[i+1] == " "){
            output += str[i+2].toUpperCase()
        }
    }
    return output
}
console.log(acronym("there's no free lunch - gotta pay yer way."))
console.log(acronym("Live from New York, it's Saturday Night!"))

// Create a function that, given a string, returns the number of non-space characters found in the string. 
const countNonSpaces = (str) => {
    let count = 0
    for (var i = 0; i < str.length; i++){
        if (str[i] != " "){
            count += 1
        }
    }return count 
}
console.log(countNonSpaces("Honey   pie, you are driving me   crazy   "))
console.log(countNonSpaces("Hello world !"))

// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

const removeShortStrings = (arr, val) => {
    let output = []
    for (var i = 0; i < arr.length; i++){
        if (arr[i].length >= val){
            output.push(arr[i])
        }
    }return output
}
console.log(removeShortStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log(removeShortStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))