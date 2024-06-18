function getData(dataId){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("sucess");

        },3000)
    })
};
// console.log("Fetching data1 !.....");
//  async function getAllData(){
//     await getData(1);
//     console.log("Fetching data2 !.....");
//     await getData(2);
//     console.log("Fetching data3 !.....");
//     await getData(3);
//     console.log("Fetching data4 !.....");
//     await getData(4);




// };
console.log("Fetching data1 !.....");
(async  ()=>{
    await getData(1);
    console.log("Fetching data2 !.....");
    await getData(2);
    console.log("Fetching data3 !.....");
    await getData(3);
    console.log("Fetching data4 !.....");
    await getData(4);




})();