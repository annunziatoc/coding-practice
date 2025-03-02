const intersection = (a, b) => {
    const intersection = {}
    const arr = []
    for (let i = 0; i < a.length; i++) {
        intersection[a[i]] = (intersection[a[i]] || 0) + 1
    }
    for (let i = 0; i < b.length; i++) {
        intersection[b[i]] = (intersection[b[i]] || 0) + 1
    }
    for (let value in intersection) {
        if (intersection[value] > 1) {
            arr.push(Number(value))
        }
    }
    console.log(arr)
    return arr
};


intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]) // -> [2,6]
intersection([2, 4, 6], [4, 2]) // -> [2,4]
intersection([4, 2, 1], [1, 2, 4, 6]) // -> [1,2,4]
intersection([0, 1, 2], [10, 11]) // -> []
