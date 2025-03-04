const fibonacci = (n) => {
    if(n===0) return 0
    if(n===1) return 1
    return fibonacci(n-1) + fibonacci(n-2)
};
fibonacci(0); // -> 0
fibonacci(1); // -> 1
fibonacci(2); // -> 1
fibonacci(3); // -> 2
fibonacci(4); // -> 3
fibonacci(5); // -> 5
fibonacci(8); // -> 21
console.log(fibonacci(11)); // -> 89



// '0': 0,
// '1': 1,
// '2': 1,
// '3': 2,
// '4': 3,
// '5': 5,
// '6': 8,
// '7': 13,
// '8': 21,
// '9': 34,
// '10': 55,
// '11': 89