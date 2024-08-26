const arr1 = [8, 3, 1, 2];
const arr2 = [3, 2, 1];

// {8, 3, 1, 2} = 8*0 + 3*1 + 1*2 + 2*3 = 11
// {3, 1, 2, 8} = 3*0 + 1*1 + 2*2 + 8*3 = 29
// {1, 2, 8, 3} = 1*0 + 2*1 + 8*2 + 3*3 = 27
// {2, 8, 3, 1} = 2*0 + 8*1 + 3*2 + 1*3 = 17

function maxRotateSum(arr) {
    let res = Number.MIN_VALUE;
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        let curr = 0;    
        for(let j = 0; j < n; j++) {
            let index = (i + j) % n;
            curr += j * arr[index];
        }
        res = Math.max(res, curr);
    }
    
    return res;
}

function maxRotateSum1(arr) {
    let n = arr.length;
    let res = Number.MIN_VALUE;

    let currSum = 0;
    for (let i = 0; i < n; i++) {
        currSum += arr[i];
    }

    let currVal = 0;
    for (let i = 0; i < n; i++) {
        currVal += i * arr[i];
    }

    for (let i = 1; i < n; i++) {
        let nextVal = currVal - (currSum - arr[i-1]) + (n-1) * arr[i-1];
        currVal = nextVal;
        res = Math.max(res, currVal);
    }
    
    return res;
}

function maxRotateSum2(arr1) {
    let n = arr.length;
    let index = -1;
    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[(i + 1) % n]) {
            index = i;
        }
    }
    
    let sum = 0;
    
    for (let i = 0; i < n; i++) {
        sum += ((index + 1 + i) % n) * arr[i];
    }
    
    return sum;
}

// console.log(maxRotateSum(arr1));
console.log(maxRotateSum1(arr1));