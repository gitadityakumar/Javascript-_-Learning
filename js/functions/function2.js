function generaltable(num){  //num is parameter
    for(i=0; i<=10; i++){
        document.write(`${num} x ${i} = ${2*i}`);
        document.write("<br>");
    }
}


generaltable(12);  // passing argument and calling the function