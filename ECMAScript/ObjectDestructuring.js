let book ={
    naam:"advance js",
    page:200,
    price:199,

};
/*
// console.log(book.naam);
//assigning prop to a varibale
let rename=book.naam;
console.log(rename);

*/

let {naam:title,page,price=500}=book; //defining default value peice=500 here it won't show because in object it has already hava vlaue 
// console.log(naam);
console.log(page);
console.log(title);

// nesting can be done same as learnt in array desrtuctring

