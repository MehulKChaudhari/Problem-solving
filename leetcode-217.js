const containsDuplicate = function (nums) {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */

  const map = new Map();
  var result = false;

  nums.forEach((element) => {
    if (map.get(element)) {
      console.log("000", element)
      return (result = true);
    }
    map.set(element, element);
    console.log("000", element)
    return result;
  });
  console.log("map", map)
  return result;
};

const arr = [1, 2, 3, 4, 5, 6, 0 ,0];

console.log("fn", containsDuplicate(arr));
