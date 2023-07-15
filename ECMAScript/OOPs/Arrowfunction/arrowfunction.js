function sum(a,b){
    return a+b;

}

//arrow function
let  sum1= (a,b)=>{
    return a+b;

}
//single line arrow function
let randoma = () => Math.random();

/*document.addEventlistner('click',funciton(){
    console.log("clicked");
});
*/
//arrow function
document.addEventListener('click',  () => console.log("clicked.."));




console.log(sum(2,3));
console.log(sum1(4,4));
console.log(randoma());
