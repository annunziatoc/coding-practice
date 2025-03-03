function countdown(n) {
    if (n === 0) return
    console.log(n)
    countdown(n - 2)
}


countdown(10)