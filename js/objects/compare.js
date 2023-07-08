let x = new Date("May 13, 2020 19:10:10");
let y = new Date();

if(y >x){
    console.log("x is past date");
}else if (x>y){
    console.log("x is future date ");

}else{
    console.log("x is same date");
}