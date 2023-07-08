// Hoist = to pull  meansofhoist

//very useful at the time of debugging

//before code run javascript read whole code so can call a function first then you can declare and this is called hoisting

hello();

function hello(){
    console.log("hello this is hoisting");

}


// in variables  what we did in above  is not possible 
//learn more form mdn docs


let x; //declaration
x=6;  //assignment
console.log(x); //call 

//auto declation is possible 
// var a;  this is done by js  and it create bug so we can use "use strict" in anywhere in code
"use strict"  //now self deceration will not happen
a=4;
console.log(x);