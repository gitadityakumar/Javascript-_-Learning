class employee{
    constructor(n){
        console.log("emp constructor is called ");
        this.name = n;
    }
    msg(){
        console.log("hi");
    }
}

class manager extends employee{
//all property and method are inherited by manager class 
constructor(p,d){
    super(p); //calling parent constructor 
    this.department = d;
}
info(){
    console.log(this.name+" "+ this.department);
    super.msg();
}
}

let mng1 = new manager("Aditya","webD");

console.log(mng1);
console.log(mng1.msg());
console.log(mng1.info());