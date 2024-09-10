const price = [ 10, 4, 5, 90, 120, 80 ];

function calculateStockSpan(arr) {
    let n = arr.length;
    let stock = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        stock[i] = 1;
        for (let j = i-1; j >= 0; j--) {
            if (arr[j] > arr[i]) {
                break;
            }
            
            if (arr[j] <= arr[i]) {
                stock[i]++;
            }
        }
    }
    
    return stock;
}

console.log(calculateStockSpan(price));