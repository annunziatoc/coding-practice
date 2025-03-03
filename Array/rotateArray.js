const rotateArray = (arr, shift) => {
    if (arr.length === 0) return arr
    if (shift === 0) return arr
    if (shift > 0) {
        for (let i = 0; i < shift; i++) {
            arr.unshift(arr[arr.length - 1])
            arr.pop()
        }
    } else if (shift < 0) {
        for (let i = 0; i < Math.abs(shift); i++) {
            arr.push(arr[0])
            arr.shift()
        }
    }
    return arr
}

console.log(rotateArray([], 2));
console.log(rotateArray([42], 1));
console.log(rotateArray([1, 2, 3], 1));
console.log(rotateArray([7, 8, 9, 10], -2));
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(rotateArray([3, 5, 7, 9, 11, 13, 15], 4));
console.log(rotateArray([1, 2, 2, 3, 4, 4, 5], 2));
console.log(rotateArray([8, 8, 8, 8, 8], 3));
console.log(rotateArray([-3, -2, -1, 0, 1, 2, 3], 5));
console.log(rotateArray(Array.from({length: 100}, (_, i) => i), 25));