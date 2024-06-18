//forEach method
//it is higher order functoin

// let arr=["delhi","hyd","vjd"];
// arr.forEach((val)=>{
//     console.log(val.toUpperCase());
// });

//map method
//it is like filter method ,but stores the value in the new array

// let arr=[1,2,3,4,5];
// let newArr=arr.map((val)=>{
//     return val**2;
// }) 
// console.log(newArr);


//filter method
//it is like map and forEach method,but it works on a condition,like conditional statements

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let newArr=arr.filter((val)=>{
//     return val%2 ==0;
// })
// console.log(newArr);

//reduce method
//this method do some operations on array and returns single value

let arr=[1,2,3,4,5,6];

let sumArr=arr.reduce((result,current)=>{
    return result+current;
});
console.log(sumArr);




