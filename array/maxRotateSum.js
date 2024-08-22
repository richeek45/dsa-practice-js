const arr = [8, 3, 1, 2];

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

console.log(maxRotateSum(arr));