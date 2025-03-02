const mostFrequentChar = (s) => {

    const hash = {}

    s.split('').forEach((char) => {
        hash[char] = (hash[char] || 0) + 1
    })


    let max = 0
    let maxChar = ''
    for (const char in hash) {
        if (hash[char] > max) {
            max = hash[char]
            maxChar = char
        }
    }

    console.log(`most frequent char is ${maxChar} with ${max} count`)
    return maxChar

}


mostFrequentChar('bookeeper');
mostFrequentChar('david');
mostFrequentChar('abby');
mostFrequentChar('mississippi');