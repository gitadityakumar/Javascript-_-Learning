/*  object 
    (1)> propties --> every object has unique propty
    (2)> action or function --> done by object or action can be done on object
    in js objects have properties and method (by which action is done)
    --> Noun is object in programming language.
*/

// creating an object
//always write property in camel case

let person =  {
    firstName:"Aditya",
    lastName:"kumar",
    weight:"50",
};
console.log(typeof(person));
//accessing the object property  using dot notaion
console.log(person.firstName);
//accessing object using array like notation
console.log(person["firstName"]);
//if you trying to access property that does not exit then the output will be undefined
// like array if you console the object name all property will be shown
console.log(person);


//changing the property value
person.firstName="adi";
console.log(person.firstName);

//adding new property to obejct 
person.age="23";
console.log(person);

//deleting peoperty
delete person.lastName;
console.log(person);

//check property is present in object or not /
//value will be in true or false
console.log('heigth' in person);

//iterating properties in  object using for in loop
for(let property in person){
    console.log(property +" : "+person[property]);
}