// https://www.geeksforgeeks.org/find-a-triplet-that-sum-to-a-given-value/


const arr = [12, 3, 4, 1, 6, 9];
const sum = 24;
const arr2 = [1, 0, 0, 1, 1, 0, 0, 1];

function tripleSum(arr, sum) {
    arr.sort((a, b) => a - b);
    let n = arr.length;

    for(let i = 0; i < n; i++) {
        let j = i + 1, k = n - 1;
        while(j <= k) {
            let total = arr[i] + arr[j] + arr[k];
            if (total === sum) {
                return true;
            } else if (total > sum) {
                k--;
            } else {
                j++;
            }
            
        }   
    }
    
    console.log(arr);
    
}

console.log(tripleSum(arr, sum));
// https://www.geeksforgeeks.org/rearrange-array-in-alternating-positive-negative-items-with-o1-extra-space-set-2/
// https://www.geeksforgeeks.org/top-50-array-coding-problems-for-interviews/
// https://www.geeksforgeeks.org/top-50-string-coding-problems-for-interviews/
