// Find a peak element which is not smaller than its neighbours
// https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/


const arr = [1, 3, 20, 4, 1, 0];
const arr1 = [10, 20, 15, 2, 23, 90, 67];
const arr2 = [100, 80, 60, 50, 20];

function findPeak(arr) {
    const n = arr.length;
    
    if (n === 0) {
        return arr[0];
    }
    if (arr[0] >= arr[1]) {
        return arr[0];
    }
    if (arr[n-1] >= arr[n-2]) {
        return arr[n-1];
    }
    
    for(let i = 1; i < n - 1; i++) {
        if (arr[i] >= arr[i-1] && arr[i] >= arr[i+1]) {
            return arr[i];
        } 
    }
    
    return 0;
};

const val = findPeak(arr2);
console.log(val);