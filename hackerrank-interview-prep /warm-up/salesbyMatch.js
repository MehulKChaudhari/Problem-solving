/**
There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

 */

function sockMerchant(n, arr) {
  const visitedArr = []; 
  const pairMade = []; 
  var pair =0
  for( i=0; i< n; i++){
    if(visitedArr.includes(arr[i]) && !pairMade.includes(arr[i])){
        pair++;
        pairMade.push(arr[i])
        console.log("visited array before", visitedArr)
        delete visitedArr[i]
        console.log("visited array after", visitedArr)
    }
    else{
        visitedArr.push(arr[i])
    }
  }
  return pair
}

const n = 9;
const array = [10, 20, 20, 10, 10, 30, 50, 10,20];
console.log(sockMerchant(n, array));

