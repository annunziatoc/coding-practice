const anagrams = (firstString, secondString) => {

    const processedFirstString = firstString.toLowerCase().split('').sort().join('')
    const processedSecondString = secondString.toLowerCase().split('').sort().join('')

    let stringCompare = true
    console.log(processedFirstString.length === processedSecondString.length)
    if (processedFirstString.length === processedSecondString.length) {
        for (let i = 0; i < processedFirstString.length; i++) {
            if (processedFirstString[i] !== processedSecondString[i]) {
                stringCompare = false
            }
        }
        return stringCompare
    } else return false
}
console.log(anagrams('restful', 'fluster'))
console.log(anagrams('cats', 'tocs'))
console.log(anagrams('monkeyswrite', 'newyorktimes'))
console.log(anagrams('paper', 'reapa'))
console.log(anagrams('elbow', 'below'))
console.log(anagrams('tax', 'taxi'))
console.log(anagrams('po', 'popp'))
