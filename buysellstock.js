// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock 
// and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4], Output: 5
// Input: prices = [7,6,4,3,1], Output: 0

function buyAndSellStock(arr) {
  let left = 0, right = 1, maxProfit = 0;
  while(right < arr.length) {

    if (arr[right] > arr[left]) {
      let profit = arr[right] - arr[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      left = right;
    }

    right++;
  }

  return maxProfit;
}

const nums = [7,1,5,3,6,4];
console.log(buyAndSellStock(nums));

