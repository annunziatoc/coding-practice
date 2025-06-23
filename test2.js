//lets do this without recursion
function selectionSort(array) {

    //loop through find the min and place that at the beginning
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        if(minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]]
        }

    }
    return array
}


console.log(selectionSort([4, 3, 2, 6, 1, 2, 3, 10, 11, 5, 0]))


