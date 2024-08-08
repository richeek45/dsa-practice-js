// Count pairs with given sum
// https://www.geeksforgeeks.org/count-pairs-with-given-sum/
// Given an array of N integers, and an integer K, 
// the task is to find the number of pairs of integers in the array whose sum is equal to K.


const arr = [1, 5, 7, -1];
const k1 = 6;
const arr2 = [1, 1, 1, 1];
const k2 = 2;
const arr3 = [10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1];
const k3 = 11;
// Max product sub array
function countPairs(arr, sum) {
    let count = 0;
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (map.has(sum - num)) {
            count += map.get(sum - num);
        }
        
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }
    
    console.log(count);
}

countPairs(arr3, k3); 