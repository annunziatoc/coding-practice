const factorialGen = (n) => {
    if (n <= 1) return () => 1
    return () => {
        const prevFactor = factorialGen(n - 1)
        return n * prevFactor()
    }
}

const factorial = (n) => {
    return factorialGen(n)()
}


console.log(factorial(6)); // -> 6
factorial(6); // -> 720
factorial(18); // -> 6402373705728000
factorial(1); // -> 1
factorial(13); // -> 6227020800
factorial(0); // -> 1
