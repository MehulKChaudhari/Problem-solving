
### Question 
[link](https://leetcode.com/problems/move-zeroes/)

### Solution
#### Javascript
```js
// two pointers approach
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            j++;
        }
    }

    console.log("mehulllll nums after ops", nums, j);

};
moveZeroes([1, 2, 2, 1, 1, 1])

// [1,4,0,2,0,0]
```