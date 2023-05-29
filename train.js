
//==============/** CHALLENGE 5: Can You Sort Me */==================

const detail_list = [12, 23, null, 34, null, 32, null, null];
const result = moveNullsKeepOrder(detail_list);
console.log("result:", result);

function moveNullsKeepOrder(detail_list) {
  let newArr = [];
  for (let i = 0; i < detail_list.length; i++) {
    if (detail_list[i] !== null) {
      newArr.push(detail_list[i]);
    }
  }
  for (let i = 0; i < detail_list.length; i++) {
    if (detail_list[i] === null) {
      newArr.push(detail_list[i]);
    }
  }
  return newArr;
}

//==============/** CHALLENGE 4: buyStock,maxProfit */==================
// const prices = [2, 1, 3, 10];
// function buyStock(stock_prices) {
//   let list = [];
//   for (let i = 0; i < stock_prices.length - 1; i++) {
//     let profit = 0;
//     for (let k = i + 1; k < stock_prices.length; k++) {
//       const margin = stock_prices[k] - stock_prices[i];
//       if (profit < margin) profit = margin;
//     }
//     list[i] = profit;
//   }
//   // console.log("list:", list);

//   const new_list = [...list];
//   const value = new_list.sort((a, b) => b - a)[0];
//   return { index: list.indexOf(value), profit: value };
// }
// console.log("You should buy stock =>", buyStock(prices));
//----------------------------------------------------------------------
// const prices = [5, 2, 1, 10, 30, 15];

// function buyStock(stock_prices) {

//   let Profit = 0;
//   let minPrice = stock_prices[0];
//   let Index = 0;
 
//   for (let i = 1; i < stock_prices.length; i++) {
//     const currentPrice = stock_prices[i];

//     if (currentPrice < minPrice) {
//       minPrice = currentPrice;
//       Index = i;
//     } else {
//       const profit = currentPrice - minPrice;
//       if (profit > Profit) {
//         Profit = profit;
//       }
//     }
//   }
//     return { Index, Profit };
// }
// console.log("You should buy stock =>", buyStock(prices));
