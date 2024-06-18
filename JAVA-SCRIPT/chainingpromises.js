function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("data=",dataId);
        resolve("sucess");
        //if(getNextData){
       // getNextData();
        //}
        
    }, 5000);
});
 };
//  console.log("fetching for data1 !...");
//  getData(1).then((res)=>{
//     console.log(res);
//     console.log("fetching for data2 !...")
//     getData(2).then((res)=>{
//         console.log(res);
//         console.log("fetching for data3 !...")
//         getData(3).then((res)=>{
//             console.log(res);
//         });
//     });
//  });
console.log("fetching for data1 !...");
 getData(1).then((res)=>{
    console.log("fetching for data2 !...");
    return getData(2);
    //console.log("fetching for data2 !...");
 })
    .then((res)=>{
        console.log("fetching data3 !...");
    return getData(3);
  
    })
   .then((res)=>{
    console.log("sucess");
            
        

 });