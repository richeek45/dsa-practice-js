// const price = [ 10, 4, 5, 90, 120, 80 ];
const price = [ 140, 10, 4, 5, 90, 120, 80 ];

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

// O (n)
function calculateStockSpan1(arr) {
  let n = arr.length;
  let stock = new Array(n).fill(0);
  let stack = [];
  stack.push(0);
  stock[0] = 1;

  for (let i = 1; i < n; i++) {
    let count = 1;
    while(arr[stack[stack.length-1]] < arr[i]) {
      let index = stack.pop();
      count += stock[index];
    }

    stack.push(i);
    stock[i] = count;
  }

  return stock;
}

console.log(calculateStockSpan1(price));