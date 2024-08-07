// Find sub Array with given sum
// https://www.geeksforgeeks.org/find-subarray-with-given-sum/

const arr = [15, 2, 4, 8, 9, 5, 10, 23];
const k = 23;

function subarray(arr, k) {
    let i = 0, j = 0;
    let n = arr.length;
    let sum = 0;
    while(j < n) {
        let v = sum + arr[j];
        if (v < k) {
            sum += arr[j++];
        } else if (v > k) {
            sum -= arr[i++];
        } else {
            return [i+1, j+1];
        }
    }
    return -1;
}

const val = subarray(arr, k);
console.log(val);