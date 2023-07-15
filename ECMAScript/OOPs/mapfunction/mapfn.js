//map fuction

let arr = [2,3,4,5,6,7,8];

//result : [4,,6,,8,10,12,14,16]
//map function with anonymous function
let arr1 = arr.map(function(val){
    return val*3;
});
console.log(arr1);


//map function with arrow function

let arrr = arr.map((val) => val*3);

console.log(arrr);
