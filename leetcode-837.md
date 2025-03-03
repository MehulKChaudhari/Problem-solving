### Question 

[Link](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence)

Given a strictly increasing array arr of positive integers forming a sequence, return the length of the longest Fibonacci - like subsequence of arr.If one does not exist, return 0.

A subsequence is derived from another sequence arr by deleting any number of elements(including none) from arr, without changing the order of the remaining elements.For example, [3, 5, 8] is a subsequence of[3, 4, 5, 6, 7, 8].


### Solution
#### Javascript

```js
function findSubsequence(arr) {
    let res = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let prev = arr[i];
            let curr = arr[j];
            let next = prev + curr;
            let length = 2;
            while (arr.includes(next)) {
                length++;
                prev = curr;
                curr = next;
                next = prev + curr;
                res = Math.max(length, res);
            }
        }
    }
    return res;
}

console.log(findSubsequence([1, 2, 3, 4, 5, 6, 7, 8]));
```