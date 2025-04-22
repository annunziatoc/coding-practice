const arr = [7, 2, 1, 6, 8, 5, 3, 4]

function quicksort (arr) {

    if (arr.length <= 1) {
        return arr
    }

    let i = -1
    let j = 0

    while (j <= arr.length - 1) {

        if (arr[j] <= arr[arr.length - 1]) {
            i++
            if (j > i) {
                const temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
        j++
    }

    const leftSubArr = (arr.slice (0, i))
    const rightSubArr = (arr.slice (i + 1))


    return [...quicksort (leftSubArr), arr[i], ...quicksort (rightSubArr)]
}

console.log (quicksort (arr))




