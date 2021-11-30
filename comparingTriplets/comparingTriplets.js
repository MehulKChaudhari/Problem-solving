// Hackerrank question ---> https://www.hackerrank.com/challenges/compare-the-triplets/problem

const testCases = require('./testCases.js');

function compareTriplets(a, b) {
    const result = [0,0];
    if(a.length !== b.length){
        return
    }
    for (var i = 0; i<a.length; i++){
        if(a[i] > b[i]){
            result[0] +=1;
        }
        else if(a[i] < b[i]){
            result[1] +=1;
        }
    }
    return result;
}

testCases.forEach((test) => {
const output = compareTriplets(test.a, test.b);
if(JSON.stringify(output) === JSON.stringify(test.expectedOutput)){
  console.log('output --->', output);
  console.log("expected Output --->", test.expectedOutput );
  console.log('Test case passed')
} else{
console.log('output --->', output);
  console.log("expected Output --->", test.expectedOutput );
  console.log('Test case failed')
}
})
