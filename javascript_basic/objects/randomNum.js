// let rn= Math.floor(Math.random()*10+1); //floor decimal pt hatane ke liye
// console.log(rn);
//.random() this function generate random number b/w 0-1

//que --> generate a random number b/w given max to min number


function getrandom(min,max){
    let x= Math.floor(Math.random()*(max-min))+min;
    // to include another limit add +1 to min --> (max-min+1)
    return x;
}
console.log(getrandom(10,20));   // in random num 10 will be included