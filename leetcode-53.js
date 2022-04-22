/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let tempSum = nums[0];

  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 0) {
    return 1;
  }

  for (var i = 1; i < nums.length; i++) {
    tempSum = Math.max(nums[i], tempSum + nums[i]);
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

console.log(maxSubArray([1520, -15, -20, 86, 45, -150, 1, 1]));
