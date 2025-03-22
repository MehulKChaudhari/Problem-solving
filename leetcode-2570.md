
### Question 
[link](https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values)

### Solution
#### Javascript
```js
var mergeArrays = function (nums1, nums2) {
    let i = 0, j = 0;
    let result = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i][0] < nums2[j][0]) {
            result.push(nums1[i]);
            i += 1;
        } else if (nums1[i][0] > nums2[j][0]) {
            result.push(nums2[j]);
            j += 1;
        } else {
            result.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
            i += 1;
            j += 1;
        }
    }
    while (i < nums1.length) {
        result.push(nums1[i]);
        i += 1;
    }

    while (j < nums2.length) {
        result.push(nums2[j]);
        j += 1;
    }

    return result;
};
```