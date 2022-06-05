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
    console.log(output)
    for (var i = 1; i < str.length; i++){
        if (str[i+1] == " "){
            output += str[i+2].toUpperCase()
        }
    }
    return output
}
console.log(acronym("there's no free lunch - gotta pay yer way."))