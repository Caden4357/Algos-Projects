
// Print integers from -52 to 1066 using a FOR loop.
// function printNums() {
//     for (var i = -52; i <= 1066; i++){
//         console.log(i)
//     }
// }
// printNums()

// Using FOR loop, print multiples of 3 from -300 to 0. Skip -3 and -6.
// 1.) write a function 
// 2.) Write a for loop to go from -300-0
// 2.) printing multiples of 3 
// 3.) ignore -3, -6

function multiplesOfThree() {
    for (var i = -300; i <= 0; i+=3){
        if (i === -6){
            continue
        }
        else if (i === -3){
            continue
        }
        else{
            console.log(i)
        }
    }
}
multiplesOfThree()
