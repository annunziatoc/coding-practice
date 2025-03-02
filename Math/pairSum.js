const pairSum = (numbers, targetSum) => {


    const pair = []
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === targetSum) {
                pair.push(i, j)
                console.log(pair)
                return pair
            }
        }
    }
    return pair
};


pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]
pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]
pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
pairSum([1, 6, 7, 2], 13); // -> [1, 2]
pairSum([9, 9], 18); // -> [0, 1]
pairSum([6, 4, 2, 8], 12); // -> [1, 3]

