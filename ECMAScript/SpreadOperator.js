//iterable objects ko spread larne ke liye iska use karte hai

let array1 = [1,3,4];

let array2 = [4, ,6,4,...array1];  //consider ...array1 as a number or string and you can insert any where in an array
console.log(array2);


//
let arr=[2,3,5];
let rrr=[4,5,4,34,566,];

let newarr =[...arr,...rrr];
console.log(newarr);
