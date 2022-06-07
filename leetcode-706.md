### Solution

[Link](https://leetcode.com/problems/design-hashmap/)

#### Javascript

```JavaScript

var MyHashMap = function() {
    this.newHashmap = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.newHashmap[key] = value;

};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    if(this.newHashmap.hasOwnProperty(key)){
        return this.newHashmap[key]
    }
    return -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    delete this.newHashmap[key]

};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

```

#### Java

```Java
```
