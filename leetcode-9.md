### Solution

[Link](https://leetcode.com/problems/palindrome-number/)

```Java
class Solution {
    public boolean isPalindrome(int x) {
        
        if(x<0) return false;
        
        int reversedNum =0, remainder, original = x;
        
        while(x!=0){
            remainder = x %10;
            reversedNum = reversedNum * 10 + remainder;
            
            x /= 10;
        }
        
        return original == reversedNum;
    }
}

```
