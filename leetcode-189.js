// Given an integer array nums, rotate the array to the right by k steps, where k is non - negative.


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


const rotatedAray = rotate([1,2,3,4,5,6,7], 3);
console.log("result ----> ", rotatedAray);
