const promisefive = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = false  //can change the valuse to see working of resove and reject 
        if (!error){
            resolve({username:"Javascript", password:"1245556"})
        }else{
            reject('ERROR:Js went wrong')
        }
    }, 1000);
});

async function consumePromiseFive(){
    try{
        const response = await promisefive
        console.log(response);

    }catch(error){
        console.log(error);
    }
}

consumePromiseFive()

//fetching data

// async function getAllUsers(){
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
// }catch(error){
//     console.log("E: error");
// }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))