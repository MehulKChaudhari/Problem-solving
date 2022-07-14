### Question 
[Link](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

### Solution

```JAVA
class Solution {
    public int maxProfit(int[] prices) {
        
        int minPrice = 10000;
        int n = prices.length;
        int maxPrice=0;
        
        for(int i =0; i<n;i++){
            minPrice = Math.min(minPrice, prices[i]);
            maxPrice = Math.max(maxPrice, prices[i] - minPrice);
        }
        return maxPrice;
    }
}
```