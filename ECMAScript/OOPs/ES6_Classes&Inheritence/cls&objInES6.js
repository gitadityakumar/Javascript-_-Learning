//creating a class
//in a class three type of function can be made

class person{
    constructor(n,a){          //constructor function call by itself 
        this.name = n;
        this.age = a;
    }
    sayHi(){
        console.log("oh Hi..");  //every method is going to prototpye by itself 
    }
    static hello(){
        console.log("hello..how are you");
    }

    static stproperty ="something";

}

let person1 = new person("Aditya", 23);

person.hello();   //static function called by class name and related with class 
console.log(person.stproperty);  //static property
person1.sayHi();
console.log(person1);