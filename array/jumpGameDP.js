const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9];

// using dynamic programming
function jumpGame(arr, i, end, memo) {
    if (i === end) {
        return 0;
    }
    
    let min_jumps = Number.MAX_VALUE;
    // calculating for each jump to find min value
    for (let j = arr[i]; j >= 1; j--) {
        if (i + j <= end) {
            min_jumps = Math.min(min_jumps, 1 + jumpGame(arr, i + j, end, memo))
        }
    }
    
    return memo[i] = min_jumps;
}

function jumpGame2(arr) {
    let n = arr.length;
    let jump = new Array(n).fill(Infinity);
    jump[0] = 0;
    
    // jump[i] stores jump count from arr[0] to arr[i]
    for(let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (j + arr[j] >= i && jump[j] !== Infinity) {
                jump[i] = Math.min(jump[i], 1 + jump[j]);   
            }
        }
    }
    console.log(jump)
    return jump[n-1];
    
}

const memo = Array(arr.length).fill(-1);
const sol = jumpGame(arr, 0, arr.length - 1, memo);
console.log(sol, memo);
const sol2 = jumpGame2(arr);
console.log(sol2);
