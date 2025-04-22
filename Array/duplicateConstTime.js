const duplicate = (arr) => {
    // arr = [4, 3, 2, 7, 8, 2, 3, 1]
    const result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[Math.abs(arr[i]) - 1] < 0) result.push(Math.abs(arr[i]))
        arr[Math.abs(arr[i]) - 1] = -Math.abs(arr[Math.abs(arr[i]) - 1])
    }
    return result
}


console.log(duplicate([4, 3, 2, 7, 8, 2, 3, 1]))


