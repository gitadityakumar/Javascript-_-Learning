/*  using "this" keyword for accessing the property of same object 
*/
let person={
    firstName:'Aditya',
    lastName:'kumar',
    sayhallo(){
        console.log("Hello! i am "+this.firstName+" and i have "+bike.model+" bike");
    }
};

let bike={
    brand:'Kawasaki',
    model:'Kawasaki Ninja H2R'
};

person.sayhallo();