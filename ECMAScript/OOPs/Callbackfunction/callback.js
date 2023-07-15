
function sayhello(){
    console.log('hello');
}




function add(num1,num2,callback){
    console.log(num1+num2);
    callback();
}

console.log(add(2,4,sayhello));