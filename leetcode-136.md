### Question 
[Link](https://leetcode.com/problems/single-number/)

### Solution

```JAVA
class Solution {
    public int singleNumber(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        
        
        for(int i =0; i< nums.length; i++){
        
            if(map.containsKey(nums[i])){
                map.put(nums[i], map.get(nums[i]) + 1);
            }
            else{
                map.put(nums[i], 1);
            }
        }
        
        for(Integer i:nums){
            if(map.get(i)==1){
                return i;
            }   
        }
        
        return 0;
    }
}
```

