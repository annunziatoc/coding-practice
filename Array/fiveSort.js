const fiveSort = (nums) => {

    let i = 0;
    let j = nums.length - 1;


    while (i < j) {

        //find first non 5 from the right
        while (i < j && nums[j] === 5) {
            j--
        }
        //if we find a 5 on the left swap the left and right pointer
        // at this point the right should be non 5 so the swap makes sense
        if (nums[i] === 5) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i = -1
        }
        i++
    }
    console.log(nums)
    return nums
}