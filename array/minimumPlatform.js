let arr = [100, 300, 500];
let dep = [900, 400, 600];

function minimumPlatform(arr, dep){
    let platform = 1;
    let result = 1;
    let n = arr.length;
    
    for (let i = 0; i < n; i++) {
        platform = 1;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                if (arr[i] >= arr[j] && dep[i] < dep[j]) {
                    platform++;
                }
            }
        }    
        result = Math.max(result, platform);
    }
    
    
    return platform;
}

function minimumPlatform2(arr, dep) {
    arr.sort();
    dep.sort();
    let n = arr.length;
    let platform = 0;
    let i = 0, j = 0;
    while(i < n && j < n) {
        if (arr[i] <= dep[j]) {
            platform++;
            i++;
        } else if (dep[j] < arr[i]) {
            platform--;
            j++;
        } else {
            i++;
            j++;
        }
    }
    
    return platform;
}

function minimumPlatform3(arr, dep) {
    let maxCount = 0;
    let count = 0;
    let n = arr.length;
    let maxDep = 0;
    for (let i = 0; i < n; i++) {
        maxDep = Math.max(maxDep, dep[i]);
    }

    const v = new Array(maxDep + 2).fill(0);

    for(let i = 0; i < maxDep; i++) {
        v[arr[i]]++;
        v[dep[i]]--;
        count += v[i];
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
}

console.log(minimumPlatform3(arr, dep))