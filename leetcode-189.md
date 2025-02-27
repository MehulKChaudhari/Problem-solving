Given an integer array nums, rotate the array to the right by k steps, where k is non - negative.

### Question 
[link](https://leetcode.com/problems/rotate-array/)

### Solution 

```js 
function rotate( arr,k) {
    let rot = k % arr.length;
    let temp = [];

    for (let i = arr.length - rot; i < arr.length; i++) {
        temp[i - (arr.length - rot)] = arr[i];
    }

    for (let i = arr.length - 1; i >= rot; i--) {
        arr[i] = arr[i - rot];
    }

    for (let i = 0; i < rot; i++) {
        arr[i] = temp[i];
    }
    return arr;
}


rotate([1,2,3,4,5,6,7], 3);
```

Java solution 

```JAVA 
class Solution {
    public void rotate(int[] nums, int k) {
        int rot = k % nums.length;
        int[] temp = new int[rot];

        for (int i = nums.length - rot; i < nums.length; i++) {
            temp[i - (nums.length - rot)] = nums[i];
        }

        for(int i = nums.length - 1; i >= rot; i--) {
            nums[i] = nums[i-rot];
        }

        for(int i = 0; i < rot; i++) {
            nums[i] = temp[i];
        }
    }
}
```

Optimised solution 

```JAVA 
class Solution {
    public void reverse(int[] nums, int start, int end) {
        while (start < end) {
            int temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }

    public void rotate(int[] nums, int k) {
        int rot = k % nums.length;
        int n = nums.length;
        reverse(nums, 0, n - 1);
        reverse(nums, 0, rot - 1);
        reverse(nums, rot, n - 1);
    }
}
```
