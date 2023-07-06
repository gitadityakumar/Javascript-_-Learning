let books=["Hindi","English","Math","Science"];

//operation on array

// push  add element at the end of an array
books.push("History");

//unshift add element at the start of an array
books.unshift("new book");

//pop()  removes the last element of an array
books.pop();

//shit() removes the first element of array
books.shift();

//splice()  removes the elements as the parameters are givern
// books.splice(1,3);//first parameter is stating point and second one is number of elements that will be removed 
books.splice(1,1);
console.log(books);
//knowing the postion of an array element with indexof()
console.log(books.indexOf("Math"));

//making an array empty 
books.length=0;  // one method 
console.log(books);



