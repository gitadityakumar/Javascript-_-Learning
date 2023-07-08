let person ={
    firstName:"Aditya",
    age:"23",
    weight:"50",
   /* sayhallo: function(){      befoe ES6 this is 
        console.log("hello");
    } */
    sayhallo(){              //after ES6 this is used
        console.log("hallo");
    }
};

//creating method using anonymous function
// person.sayhallo=function(){
//     console.log("hello!");
// }


/* 
function greet(){
    console.log("hello!");
}

person.sayhallo=greet;   */






person.sayhallo();