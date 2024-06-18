const getData=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am the promise");
       
       reject("an error occured")
    })
};
// let promise=getData();
// promise.then((res)=>{
//     console.log("resolve",res);
// })
let promise=getData();
promise.catch((err)=>{
    console.log("rejected",err);
});