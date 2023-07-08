function Student(first,last, age, cls,){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.class = cls;
}
//using object prototypes

// Student.prototype.nationality = "indian";

let student1 = new Student("Aditya", "kumar",23,13);
console.log(student1.nationality);

//using object prototypes

Student.prototype.nationality = "indian";

console.log(student1.nationality);