// let promise=new Promise((resolve,reject)=>{
//     console.log("i am promise");

// })
let promise=getData();
function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data=",dataId);
           
           reject("something error occured");
        },5000);

    })
}