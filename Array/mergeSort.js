const mergeSort = (arr) => {

    if(arr.length <= 1) return arr

    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)


    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)



    return merge(sortedLeft,sortedRight)
}

function merge (left, right) {

    const mergedArr = []
    let i = 0
    let j = 0
    while(i < left.length && j < right.length){
        if(left[i] < right[j]) {
            mergedArr.push(left[i])
            i++
        } else {
            mergedArr.push(right[j])
            j++
        }
    }

    while(i < left.length) {
        mergedArr.push(left[i])
        i++
    }
    while(j < right.length) {
        mergedArr.push(right[j])
        j++
    }

    return mergedArr
}



console.log(mergeSort([4,3,2,6,1,2,3,10,11,5,0]))