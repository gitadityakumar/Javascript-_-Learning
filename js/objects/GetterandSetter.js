let obj = {
    firstName:"Aditya kumar",
    age:"23",

    // get getname(){
    //     return this.firstName.toUpperCase();
    // },

    set setname(n){
        this.firstName = n.toUpperCase();
    }
};

obj.setname = "aditya";

console.log(obj);

//setter function ka use input lete samay manuplate karne ke liye
