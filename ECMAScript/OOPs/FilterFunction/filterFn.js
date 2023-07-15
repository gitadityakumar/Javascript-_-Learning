let arr = [2,22,13,5,6,61,23,7];

//rmove all number > 10

let arr1 = arr.filter((val) => val>10);
console.log(arr1);

let arrr = arr.filter(function(val){
    return val>10;
});
console.log(arrr);


let team = [
    {
        name:"Aditya kumar",
        positon : "dev",
    },
    {
        name:"shumham",
        positon:"ui designer",
    },
    {
        name:"suresh",
        positon:"ux designer",
    },
    {
        name:"surendra",
        positon:"backend engineer",
    },
    {
        name:"ram",
        positon:"devops engineer",
    },


];
let BE = team.filter(val => val.positon == "backend engineer" );
console.log(BE);