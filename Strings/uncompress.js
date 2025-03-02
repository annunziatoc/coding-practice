const uncompress = (s) => {
    const charArr = []
    let numberArr = []
    let currentMult = 0
    s.split('').forEach((char) => {
        if ('0123456789'.includes(char)) {
            numberArr.push(Number(char))

        } else {
            currentMult = Number(numberArr.join(''))
            charArr.push(char.repeat(currentMult))
            numberArr = []
        }
    })
    console.log(charArr.join(''))
    return charArr.join('')
};


const uncompressed = (s) => {

    let result = ''
    const arr = []
    const numbers = '1234567890'

    for (let j = 0; j < s.length; j++) {
        if (numbers.includes(s[j])) {
            result += s[j]
        } else {
            arr.push(s[j].repeat(Number(result)))
            result = ''
        }
    }
    return arr.join('')
};



uncompress("2c3a1t"); // -> 'ccaaat'
uncompress("4s2b"); // -> 'ssssbb'
uncompress("2p1o5p"); // -> 'ppoppppp'
uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'
uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
