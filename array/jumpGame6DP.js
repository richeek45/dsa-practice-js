// const arr = [10, -5, -2, 4, 0, 3], k = 2;
// const arr = [1,-1,-2, 4,-7, 3], k = 2;
const arr = [1,-5,-20,4,-1,3,-6,-3], k = 2;

// WRONG ANSWER
function jump6(arr, k) {
    let n = arr.length;
    let res = new Array(n).fill(Number.MIN_VALUE);
    res[0] = arr[0];
    let max = 0;

    for (let i = 1; i < n; i++) {
        let val = -999, ind = -1;
        for (let j = i; j < i + k; j++) {
            if(j < n) {
                if (max !== j && res[max] + arr[j] > val) {
                    val = res[max] + arr[j];
                    ind = j;
                }
            }
        }
        res[ind] = val;
        max = ind;

        console.log(i, ind, val);

    }
    console.log(res);
    return res[n-1];
}

function jumpMaxCount(nums) {
    let dp = new Array(nums.length);
    let deque = [];
    let n = nums.length;
    dp[0] = nums[0];
    deque.push(0);

    for (let i = 1; i < n; i++) {
        if (i - deque[0] > k) {
            deque.shift();
        }

        dp[i] = nums[i] + dp[deque[0]];

        while (deque.length > 0 && dp[deque[deque.length - 1]] <= dp[i]) {
            deque.pop();
        }

        deque.push(i);
    
    }
    
    return dp[dp.length - 1];
}

console.log(jumpMaxCount(arr, k));
