//==============/** CHALLENGE 6: MURDER CASE **/==================

const magazine =
  "Loren kill ipsum dolor sit amet, consectetur adipiscing elit, you sed do eious tempor incididunt ut labore et dolore magna";

const note = "dolor kill you";
const result = canMurderWrite(note);
console.log("Killer yoza oladimi:", result);



// const canMurderWrite = (note) => {
//   let text = note.split("");
//   let magazineText = magazine.split("");
//   for (let i = 0; i < text.length; i++) {
//     if (!magazineText.includes(text[i])) {
//       return false;
//     }
//   }
//   return true;
// };
function canMurderWrite(note) {
  const text = note.split(" ");
  const magazineText = magazine.split(" ");
  const result = text.map((value) => magazineText.includes(value));
  return result.every((value) => value === true);
};

/////////////////////////////////////////////////////////////////////
/* F-Task: Shunday function tuzing, unga string argument pass bolsin. 
Function ushbu agrumentdagi faqat digitlarni yangi stringda return qilsin!
Masalan: findDigits('ad5we34jkf89') return qilishi kerak bolgan qiymat '53489'
*/
// let findDigits = (str) => {
//   let found = [];
//   let arr = str.split("");
//   arr.map((ele) => {
//     if (parseInt(ele)) {
//       found.push(ele);
//     }
//   });
//   return found.join("");
// };

// let str = "ad5we34jkf89";
// const result = findDigits(str);
// console.log(result);
//////////////////////////////////////////////

// const findDigits1 = (ele) => {
//   let number = "";
//   for (let i = 1; i < ele.length; i++) {
//     if (!isNaN(ele[i])) number += ele[i];
//   }
//   return Number(number);
// };

// const result1 = findDigits1("ad5we34jkf89");
// console.log(result1);
//////////////////////////////////////////////

// let findDigits = (str) => {
//   let finded = str.split("").filter((value) => {
//     return !isNaN(parseInt(value));
//   });
//   return finded.join("");
// };

// let str = "ad5we34jkf89";
// const result = findDigits(str);
// console.log(result);

//==============/** CHALLENGE 5: Can You Sort Me */==================
// let arr = [12, 23, null, 34, null, 32, null, null];
// function moveNullsKeepOeder(arr) {
//   return arr.sort();
// }
// console.log(moveNullsKeepOeder(arr));
////////////////////////////////////////////////////////////////////
// let arr = [4, 10, 888, 7, 1, null, 99, null, 100];

// let filteredNum = arr.filter((value) => value !== null).map((value) => value);
// let filteredNull = arr.filter((value) => value === null).map((value) => value);
// let result = filteredNum.concat(filteredNull);

// console.log(result);

//////////////////////////////////////////////////////////////////////
// const detail_list = [12, 23, null, 34, null, 32, null, null];
// const result = moveNullsKeepOrder(detail_list);
// console.log("result:", result);

// function moveNullsKeepOrder(detail_list) {
//   let newArr = [];
//   for (let i = 0; i < detail_list.length; i++) {
//     if (detail_list[i] !== null) {
//       newArr.push(detail_list[i]);
//     }
//   }
//   for (let i = 0; i < detail_list.length; i++) {
//     if (detail_list[i] === null) {
//       newArr.push(detail_list[i]);
//     }
//   }
//   return newArr;
// }

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
