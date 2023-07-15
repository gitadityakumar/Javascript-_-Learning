//proptotyping

function Person(first,last,a){
    this.firstName = first;
    this.lastNamae = last;
    this.age = a;

}

Person.prototype.fullName = function(){
    console.log(this.firstName + " " + this.lastNamae);
}
// Person.prototype.age = "23"; //we do  not put prperties in prototype 