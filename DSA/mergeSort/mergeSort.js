const mergeSort = (left, right) => {
  
};

const divideArray = (array) => {
  if (array.length < 2) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const rigth = array.slice(middle, array.length);
  const dividedLeft = divideArray(left);
  const dividedRight = divideArray(rigth);
  return mergeSort(dividedLeft, dividedRight);
};

const array = [9, 7, 6, 8, 5, 3, 2, 4, 1];
divideArray(array);
