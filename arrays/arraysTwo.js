// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
const reverse = (arr) => {
    if (arr.length < 2){
        return arr;
    }
    for (var i = 0; i < arr.length/2; i++){
        let temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr;
}
console.log(reverse([1,2,3,4,5]))
console.log(reverse([1,2]))
console.log(reverse([100]))
console.log(reverse([-90, 700, 800, -2, 0.435, 9045, 0, -70000, 80]))

// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

const shiftArrayToRight = (arr, val) => {
    for (var i = 0; i < val; i++){
        temp = arr[arr.length-1]
        for (var k = arr.length-2; k >= 0; k--){
            arr[k+1] = arr[k]
        }arr[0] = temp
    }return arr
}
console.log(shiftArrayToRight([1,2,3,4,5], 1))
console.log(shiftArrayToRight([1,2,3,4,5], 2))
console.log(shiftArrayToRight([1,2,3,4,5], 3))

const shiftArrayToLeft = (arr, val) => {
    for (var i = 0; i < val; i++){
        temp = arr[0]
        for (var k = 1; k < arr.length; k++){
            arr[k-1] = arr[k]
        }arr[arr.length-1] = temp
    }return arr
}
console.log(shiftArrayToLeft([1,2,3,4,5], 1))
console.log(shiftArrayToLeft([1,2,3,4,5], 2))
console.log(shiftArrayToLeft([1,2,3,4,5], 3))

// ! combine the 2 functions above 
