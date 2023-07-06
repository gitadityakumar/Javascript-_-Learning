let str=" This is javascript . i am learning it .";

let substring = str.substr(9 ,10); //firstt parameter tell where to start and second tells the length of string
let substrin=str.substring(9,19);  //first parameter string pt and second is end pt.
console.log(substring);
console.log(substrin);


// locating the postion of an string

let strr="This is good ";
let pos=strr.indexOf('good');  // indexof tells the postion of string
console.log(pos);

//searching from behind 

let poss=strr.lastIndexOf('is');  // lastindexof  search from behind 
console.log(poss);


//Removing white spaces
//trim() removs white spaces 
//.trimStart and .trimEnd are also use to removes spaces from start and end 
let trimstr=" this is text for test to trim  ";
console.log(trimstr);
console.log(trimstr.trim());


//changing to uppercase
let naam="adITya";
console.log(naam.toUpperCase()); //changinng to uppercase 
console.log(naam.toLowerCase()); // changing to lowercase





