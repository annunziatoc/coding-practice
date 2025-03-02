const isPrime = (arr) => {
    const listOfPrimes = []
    arr.forEach((n) => {
        if (n <= 1) return
        if (n === 2) {
            listOfPrimes.push(n)
            return
        }
        if (n % 2 === 0) return

        let isPrime = true
        for (let i = 3; i < Math.floor(Math.sqrt(n)); i += 2) {
            if (n % i === 0) {
                isPrime = false
                break
            }
        }
        if (isPrime === true) listOfPrimes.push(n)
    })
    return listOfPrimes
}


console.log(isPrime([1, 2, 3, 4, 7, 10, 13, 16, 19, 23, 26, 29, 30]))