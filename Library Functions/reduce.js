const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
//
// function reduce(arr, callback) {
//
//     for (let i = 0; arr.length > 1; i++) {
//
//         const result = callback(arr[0], arr[1])
//         arr.splice(0, 2, result)
//         console.log(arr)
//     }
//     return arr
// }
//
//
// console.log(reduce(arr, (a, b) => a + b))


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
//
// function reduce(arr, callback) {
//     let result = 0
//     for (let i = 0; i < arr.length ; i++) {
//
//         result = callback(result, arr[i])
//     }
//     return result
// }
//
//
// console.log(reduce(arr, (a, b) => a + b))
//


// do a recursive reduce

function recursiveReduce(arr, callback, accumulator = 0) {
    //base case
    if (arr.length === 0) {
        return accumulator // processed all the elements
    }
    let newAccumulator = callback(accumulator, arr[0])
    return recursiveReduce(arr.slice(1), callback, newAccumulator)
}


console.log(recursiveReduce(arr, (a, b) => a + b))



