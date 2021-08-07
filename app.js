let usd = 9433.34;
let euro = 10354.03;

let ticket = 500 * usd;
let hotel = 250 * usd;
let others = 120 * euro;

let all = ticket + hotel + others;

let sum = prompt("summangizni kiriting");

let result = all < sum ? "borish imkoniyati bor" : "imkoniyat yo'q"

console.log(result);