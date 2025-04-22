const duplicate = (arr) => {
    const hash = {}
    let result = []
    for (let i = 0; i < arr.length; i++) {
        hash[arr[i]] = (hash[arr[i]] || 0) + 1
    }

    for (const value in hash) {
        if (hash[value] > 1) {
            result.push(Number(value))
        }
    }

    return result
}


console.log(duplicate([4, 3, 2, 7, 8, 2, 3, 1]))


