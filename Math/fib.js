function fib(n, memo={}) {
    if (n <= 1)
    {
        memo[n] = n
        return n
    }
    if(n in memo) return memo[n]

    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    console.log(memo)
    return memo[n]
}

fib(11)




