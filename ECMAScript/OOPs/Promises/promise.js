// js promises has three states 
//pending , rejected , fulfilled
// promises are objects ]


//creation of promises

const promiseone = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls , cyrptography , network 

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
});

promiseone.then(function(){
    console.log("Promise consumed");
})        //.then ka connection resolve ke saath hai


//

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"Aditya", emial:"aditya@gmail.com"})
    },1000)

})
promiseThree.then(function(user){
    console.log(user);
})

//promise 4

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true 
        if (!error){
            resolve({username:"Aditya", password:"1234455"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
//chaining is perfomed here

promisefour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The Promise is either reolve or rejected"))