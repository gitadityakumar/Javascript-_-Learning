function Creature(ls){
    this.lifespan = ls;

}
Creature.prototype.breath = function(){
    console.log("breathing....");
}

let creature1 = new Creature(100);
console.log(creature1);



function Person(first,last,a){
    this.firstName = first;
    this.lastNamae = last;
    this.age = a;

}

Person.prototype.fullName = function(){
    console.log(this.firstName + " " + this.lastNamae);
}


Person.prototype.__proto__ = Object.create(Creature.prototype); //Prototype chaining

let person1 = new Person("Aditya","kumar",23);
let perosn2 = new Person("adi","singh",22);

console.log(person1);
console.log(perosn2.breath());

