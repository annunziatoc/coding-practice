const reverseString = (s) => {
    const str = [...s]
    if (str.length === 0) return ''
    return reverseString(s.slice(1)) + str[0]
};
console.log(reverseString("hello")); // -> "olleh"
console.log(reverseString("abcdefg")); // -> "gfedcba"
console.log(reverseString("stopwatch")); // -> "hctawpots"
console.log(reverseString("")); // -> ""
