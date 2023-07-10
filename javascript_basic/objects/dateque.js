/*  a date is given and you have to calculate date after 50 days
*/
let x = new Date("May 13, 2020 19:10:10");
let y = new Date("May 13, 2020 19:10:10");
y.setDate(x.getDate() + 50);

console.log(x);
console.log (y);


