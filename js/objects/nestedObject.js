//objects can have object inside it 
//remember bag analogy

// curly braces creates a new object
let user = {
    id:101,
    email:"abc@gmail.com",
    personalInfo:{
        naam:"abc",
        address: {
            street:"random street",
            city:"random city",
            country:"india",
        }
    }
};

console.log(user);
console.log(user.personalInfo.address.street);


//it will be used in the time of working with jason and API's 
