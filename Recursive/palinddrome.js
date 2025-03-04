const palindrome = (s) => {
    const arr = [...s]
    let i = 0
    let j = arr.length - 1
    if (arr.length <= 1) return true
    if (arr[i] === arr[j]) {
        return palindrome(arr.slice(1, arr.length - 1))
    } else return false
};
console.log(palindrome("pop")); // -> true
console.log(palindrome("kayak")); // -> true
console.log(palindrome("pops")); // -> false
console.log(palindrome("boot")); // -> false
console.log(palindrome("rotator")); // -> true
console.log(palindrome("abcbca")); // -> false
console.log(palindrome("")); // -> true
