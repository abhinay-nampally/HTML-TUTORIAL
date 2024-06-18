// let arr=[98,47,75,99,22,100,];
// let toppers=arr.filter((val)=>{
//     return val > 90;
// });
// console.log(toppers);

 let n=prompt("Enter a number");

let arr = [];
for(let i=1; i<=n; i++){
    arr[i-1]=i;
    
}
console.log(arr);

// let sumArr=arr.reduce((prev,current)=>{
//     return prev+current;
// });
// console.log(sumArr);


let sumArr=arr.reduce((prev,current)=>{
    return prev*current;
});
console.log(sumArr);
