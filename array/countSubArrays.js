// https://www.geeksforgeeks.org/count-subarrays-equal-number-1s-0s/


const arr = [1, 0, 0, 1, 0, 1, 1];
const arr2 = [1, 0, 0, 1, 1, 0, 0, 1];

function countSubArrays(arr) {
    const map = new Map();
    let sum = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            sum += -1;
        } else {
            sum += 1;
        }
        
        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1);
        }
    }
    
    let count = 0;
    map.forEach((value, key) => {
        if (value > 1) {
            count += (value * (value - 1)) / 2;
        }
    })
    
    if(map.has(0)) {
        count += map.get(0);
    }
    
    console.log(count);
}

countSubArrays(arr2);