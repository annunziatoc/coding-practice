const compress = (s) => {

    let result = ''
    let obj = {}
//storing the count in the object
    let isConsecutive = false
    for (let i = 0; i < s.length; i++) {
        if (s[i] == s[i + 1]) {
            isConsecutive = true
        } else isConsecutive = false

        if (!obj[s[i]]) {
            obj[s[i]] = 0
        }
        obj[s[i]]++

        if (!isConsecutive) {
            // processing the object
            for (let count in obj) {
                if (obj[count] > 1) {
                    const times = obj[count]
                    result += String(times)
                }
                result += count
            }
            obj = {}
        }

    }
//return result
    console.log(result)
    return result
};


compress('ccaaatsss'); // -> '2c3at3s'
compress('ssssbbz'); // -> '4s2bz'
compress('ppoppppp'); // -> '2po5p'
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
// -> '127y'
