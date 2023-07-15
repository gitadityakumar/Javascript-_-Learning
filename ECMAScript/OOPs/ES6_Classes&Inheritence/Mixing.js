
let usefulmethod ={
    sayHi(){
        console.log("Hi");
    },

    sayBye(){
        console.log("Bye");
    }
}




class user{
    constructor(){
        this.name  = "Aditya";
    }
}
Object.assign(user.prototype,usefulmethod); //Mixing

let user1 = new user();
console.log(user1);
console.log(user1.sayBye());