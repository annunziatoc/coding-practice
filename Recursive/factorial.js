const factorial = (n) => {
    if (n <= 1) return 1
    const result = n * factorial(n - 1)
    return result

}

