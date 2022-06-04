### Question

[link](https://leetcode.com/problems/sort-colors)

### Solution

`Brute force approach`

```JAVA
class Solution {
    public void sortColors(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<>();

        for(int i=0; i< nums.length; i++){
            if (map.containsKey(nums[i])) {
                map.put(nums[i], map.get(nums[i])+1);
            }
            else{
                map.put(nums[i], 1);
            }
        }
        int idx = 0;

        for (Map.Entry<Integer, Integer> e : map.entrySet()){

            for(int j=0; j< e.getValue(); j++){
                nums[idx] = e.getKey();
                idx++;
            }
        }
    }
}
```
