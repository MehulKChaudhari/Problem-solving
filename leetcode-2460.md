
### Question 
[link](https://leetcode.com/problems/apply-operations-to-an-array)

### Solution
#### Javascript
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            nums[i] = nums[i] * 2;
            nums[i + 1] = 0;
        }
    }

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
applyOperations([1, 2, 2, 1, 1, 1])

// [1,4,0,2,0,0]
```