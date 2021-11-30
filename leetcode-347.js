// Leetcode question 347. Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
  const frequents = nums.reduce((frequent, number) => {
    if (number in frequent) {
      frequent[number] += 1;
    } else {
      frequent[number] = 1;
    }
    return frequent;
  }, {});

  var sortedArray = [];
  for (number in frequents) {
    sortedArray.push([number, frequents[number]]);
  }
  sortedArray.sort((a, b) => {
    return b[1] - a[1];
  });
  
  const finalValues = sortedArray.map((ele) => parseInt(ele[0])).slice(0, k);
  return finalValues;
};

const nums = [1, 1, 1, 1, 2, 2, 2, 3];
const k = 1;

console.log(topKFrequent(nums, k));
