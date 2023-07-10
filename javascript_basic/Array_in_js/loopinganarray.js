let book=["math", "physics","bio", "cse"];


//looping and array 

// for(i=0; i<book.length; i++){
//     console.log(`Element ${i} is ${book[i]} \n`);
// }


//for each loop

book.forEach(myfn);

function myfn(value){
    console.log(value);
}