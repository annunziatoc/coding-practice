const sumOfLengths = (strings) => {
    const stringsCpy = [...strings]
    if (stringsCpy.length === 0) return 0
    return stringsCpy[0].length + sumOfLengths(stringsCpy.slice(1))
};

console.log(sumOfLengths(["bike", "at", "pencils", "phone"])); // -> 18
console.log(sumOfLengths([])); // -> 0
console.log(sumOfLengths(["", " ", "  ", "   ", "    ", "     "])); // -> 15
console.log(sumOfLengths(["0", "313", "1234567890"])); // -> 14

