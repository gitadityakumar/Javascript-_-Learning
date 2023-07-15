let person ={};   //empty object
console.log(person);

let person1 = new Object();  //another method to create an object

person1.name="Aditya kumar";

person1.sayHi = function(){
    console.log("Hi , how are you!");
}
console.log(person1);
console.log(person1.name);
person1.sayHi();