//Global variable and local variable

let car="jaguar"; //global variable

function add(){

    let c=3;
    console.log(3);  //local variable and its scope is within this function
}

function sub(){
    let c=5;
    console.log(c);
}

sub();

add();
// console.log(c);

//local function get delted as their scope ends 
// local variable of same name can be created 
//global variable of same name can not be created
