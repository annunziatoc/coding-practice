function selectionSort(array, sorted = []) {

    //if we get to an array of length 1 return that
    if(array.length <= 1) {
        //push the last
        sorted.push(array[0])
        return sorted
    }
    //find the min
    let min  = Infinity
    let i = 0
    //search until i reached the end of the array
    while(i < array.length) {
        if(array[i] < min){
            min = array[i]
        }
        i++
    }
    //we have the min so add it to the array
    sorted.push(min)

    //slice the min out
    const idx = array.findIndex((idx) => idx === min)

    return selectionSort(array.filter((value, index) => index !== idx), sorted)
}


console.log(selectionSort([4, 3, 2, 6, 1, 2, 3, 10, 11, 5, 0]))

//
// // SOLUTION 3: Closure (encapsulate the state)
// function wrapper(inputArray) {
//     const sortedArr =  []
//
//     function selectionSort (array) {
//
//         //early exit
//         if(array.length <= 1) {
//             sortedArr.push(array[0])
//             return
//         }
//
//         let index = 0
//         let min = Infinity
//         //just constantly find the min and put it at the front and remove the index at which you found the min
//         for(let i = 0; i < array.length;i++){
//             if(array[i] < min){
//                 min = array[i]
//                 index = i
//             }
//         }
//
//         //we have min so now put it at the front
//         sortedArr.push(min)
//         //remove the min index from the array
//         //
//         for(let i = index; i < array.length - 1;i++){
//             array[i] = array[i + 1]
//         }
//         array.length--
//         //call selection sort with one less
//         return selectionSort(array)
//     }
//     selectionSort(inputArray)
//     return sortedArr
// }
//
// console.log(wrapper([4, 3, 2, 6, 1, 2, 3, 10, 11, 5, 0]))


// SOLUTION 2: Return and concatenate (pure functional)
//
// function selectionSort(array) {
//     if (array.length <= 1) return array
//
//     let i = 0
//     let idx = 0
//     let min = Infinity
//     while (i < array.length) {
//         if(array[i] < min){
//             min = array[i]
//             idx = i
//         }
//         //needs to be outside the if to get through every single one
//         i++
//     }
//     //keep everything except idx
//     //if true inclue, else exclude
//     //idx !== index is false when it is equal to the index thus excluding it
//     const rest = array.filter((_,index) => idx !== index)
//     return [min, ...selectionSort(rest)]
// }
//
// console.log(selectionSort([4, 3, 2, 6, 1, 2, 3, 10, 11, 5, 0]))


// SOLUTION 4: Class-based approach

//lets do this without recursion
// function selectionSort(array) {
//
//     //loop through find the min and place that at the beginning
//     for (let i = 0; i < array.length - 1; i++) {
//         let minIndex = i
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[j] < array[minIndex]) {
//                 minIndex = j
//             }
//         }
//         if(minIndex !== i) {
//             [array[i], array[minIndex]] = [array[minIndex], array[i]]
//         }
//
//     }
//     return array
// }
//
//
// console.log(selectionSort([4, 3, 2, 6, 1, 2, 3, 10, 11, 5, 0]))
//


