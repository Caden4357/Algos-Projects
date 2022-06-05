
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
function pushFront(arr, val) {
    for (var idx = arr.length-1; idx >= 0; idx--){
        arr[idx+1] = arr[idx]
    }
    arr[0] = val
    console.log(arr)
}
pushFront([4,3,2,1],6)
pushFront([43,-93,28,1,0,3,-90],356)
pushFront([9,89,7],6)
pushFront([4],6)

const pushFrontTwo = (arr, val) => {
    temp1 = arr[0]
    temp2 = arr[1]
    originalLength =  arr.length
    for (var i = 0; i < originalLength; i++){
        arr[i+1] = temp1
        temp1 = temp2
        temp2 = arr[i+2]
    }
    arr[0] = val
    console.log(arr)
    console.log(originalLength)
}
pushFrontTwo([4,3,2,1],6)
pushFrontTwo([43,-93,28,1,0,3,-90],356)
pushFrontTwo([9,89,7],6)
pushFrontTwo([4],6)
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use pop(), you are able do this without it though!

function popFront(arr) {
    firstVal = arr[0]
    arr = arr.slice(1)
    console.log(arr)
    console.log(firstVal)
}
popFront([456,3,2,1,940,393,389,-323])


const popFrontTwo = (arr) => {
    var firstVal = arr[0]
    for (var i = 1; i < arr.length; i++){
        arr[i-1] = arr[i]
    }
    console.log(arr)
    arr.pop()
    console.log(arr)
    return firstVal
}
console.log(popFrontTwo([456,3,2,1,940,393,389,-323]))

// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

const insertAt = (arr, idx, val) => {
    for (var i = 0; i < arr.length; i++){
        if (i == idx){
            arr.length++
            var temp1 = arr[i]
            var temp2 = arr[i+1]
            arr[i] = val
            for (var k = i+1; k < arr.length; k++){
                arr[k] = temp1
                temp1 = temp2
                temp2 = arr[k+1]
            }
            return arr
        }
    }
    return arr;
}
console.log(insertAt([4,5,6,7,8],0,15))
console.log(insertAt([4,5,6,7,8],4,-9))
console.log(insertAt([],4,-9))
console.log(insertAt([4,5,6,7,8],7,15))


// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

const deleteAt = (arr,idx) => {
    for (var i = 0; i < arr.length; i++){
        if (i == idx){
            for (var k = i; k < arr.length; k++){
                arr[k] = arr[k+1]
            }
            arr.pop()
            return arr
        }
    }
}
console.log(deleteAt([3,4,5,6,7], 2))
console.log(deleteAt([-3,-980,34,344,-443,9000,0.349], 4))


// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

const swapPairs = (arr) => {
    for (var i = 0; i < arr.length; i+=2){
        if (arr[i+1] != undefined){
                temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
        }
    }
    return arr
}
console.log(swapPairs([1,2,3,4]))
console.log(swapPairs([1,2,3,4,5,6,7,8,9,10,11]))
console.log(swapPairs(["Brendan",true,42]))


const deleteDuplicates = (arr, val) => {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == val){
            arr[i] = arr[i+1]
        }
    }
    return arr
}
console.log(deleteDuplicates([3,4,4,4,5,6,7], 4))
console.log(deleteDuplicates([-3,-980,34,344,-443,9000,0.349], -3))

function deleteDups(arr){
    uniqueChars = []
    for (var i = 0; i < arr.length; i++){
        if (!uniqueChars.includes(arr[i])){
            uniqueChars.push(arr[i])
        }
    }
    return uniqueChars
}
console.log(deleteDups([-2,-2,3.14,5,5,10]))
console.log(deleteDups([9,19,19,19,19,19,29]))

function minToFront(arr) {
    var min = arr[0];
    var idx = 0;
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
            idx = i;
        }
    }
    for (var x = idx; x > 0; x--){
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
        console.log(arr, temp)
    }
    return arr;
}
console.log(minToFront([3,4,2,7,-6,5,3]))