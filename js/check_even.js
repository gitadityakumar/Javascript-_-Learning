let counter=1;
let sum=0;

while(counter<=100){
    if (counter%2==0){
        sum=sum+counter;
    }
    counter++;
}
document.write(sum);