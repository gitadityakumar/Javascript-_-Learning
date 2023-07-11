//rest parameter
//problem if user want to give as many input as he want but we will defined no of args in function
/*
function Sum(...args){
    console.log(args);

}
Sum();

*/

function Sum(...args) {
  let result = 0;

  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  console.log(result);
}

Sum(2, 3, 4, 5, 3, 34, 2423, 34, 3435, 4, 5);
