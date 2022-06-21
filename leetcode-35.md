### Solution

[Link](https://leetcode.com/problems/search-insert-position/)

```Java
class Solution {
    public int searchInsert(int[] nums, int target) {
        int min = 0;
        int ele, i;
        int max = nums.length - 1;

        while (min <= max) {
            i = (int) Math.floor((min + max) / 2);
    
            if(target == nums[i]){
                return i;
            }
            else if (target < nums[i]) {
                max = i - 1;
              
            } else {
                min = i + 1;
            }
        }
        return min;
    }
}
```
