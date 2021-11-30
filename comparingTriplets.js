// Hackerrank question ---> https://www.hackerrank.com/challenges/compare-the-triplets/problem

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

const a = [10,12,25]
const b = [11,12,20]
console.log(compareTriplets(a,b));