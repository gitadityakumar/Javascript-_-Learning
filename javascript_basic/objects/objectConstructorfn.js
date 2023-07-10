// to create many object use object constructor function

//its like classes and classes will be introduced in ES6

function Student(first,last, age, cls,){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}

let student1 = new Student("Aditya", "kumar",23,13);

console.log(student1);


// most useful while creating same time of object
/*
let student2 = new Student ("Rohan","singh",22,10);
console.log(student2);    */

//adding property in student1  
student1.height= 134;
console.log(student1);


//adding action or method 
student1.name = function(){
    return this.firstName + " " + this.lastName;
}
console.log(student1.name());


