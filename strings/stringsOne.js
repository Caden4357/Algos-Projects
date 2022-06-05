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