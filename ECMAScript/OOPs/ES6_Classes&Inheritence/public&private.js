class emp  {
    #name = " "; //private property
    constructor(n1,n2){
        this.name =n1;
        this.#name = n2;
    
    }
    getname(){
        console.log(this.name);
        console.log(this.#name);
    }
}

let emp1 = new emp("Akash","adi");
console.log(emp1.name);  //public propety can be called by object but not  private
console.log(emp1.getname()); //calling private property



