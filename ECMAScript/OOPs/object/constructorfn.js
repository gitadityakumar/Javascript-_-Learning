//in constructor function name start with capital
//blueprint banane ka kaam jisse karte hai usko constructor function kehte kehte hai
//before ES6 this is alternate of classess

function Person(first, last , a ){
    this.firstName=first;
    this.lastName = last;
    this.age = a;

    this.sayHi = function(){
        console.log("Oh Hi!");
    }

}

let person1 = new Person("Aditya","kumar",23);

// let person2 =new Person("adi","singh",22);

console.log(person1);
console.log(person1.sayHi());
// console.log(person2);