function isPangram(string) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const spreadInput = [...string].filter((char) => !/\s/.test(char))

    for (let i = 0; i < spreadInput.length; i++) {
        if (alphabet.includes(spreadInput[i])) {
            alphabet.split('').splice()
        } else return false
    }
    return true
}


console.log(isPangram("The quick brown fox jumps over the lazy dog"))
console.log(isPangram("no"))
