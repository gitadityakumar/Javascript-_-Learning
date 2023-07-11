//

let book= ["advance js",200,149];
console.log(book[0]);


//array ki har value ke liye ek variable banana hai

/*
let name=book[0];
let pages=book[1];
let price=book[2];

console.log(pages); 

// this is tedious task so arrydestructuring came in picutre
*/

let [naame,pages,price,extra=400]=book; //extra=400 is consider as default value
console.log(naame);
console.log(pages);
console.log(price);
console.log(extra); //you can meake extra variable and if array does not have corresponding value it will show undefined

//NESTED ARRAY
let books = ["advance java",300,344,["Aditya",2023]];

let [naaam,page,cost,[author,year]]=books;

console.log(naaam);
console.log(author);
console.log(year);



//REAL WORLD USE

function boook(){
    //do something 

    return ["advance js",200,149];
}

let [book_title,paisa] =boook();
console.log(book_title);
console.log(paisa);
