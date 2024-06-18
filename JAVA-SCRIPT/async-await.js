// async function hello(){
//     console.log("hello");
// }
function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("The Weather is cool");
            resolve("sucess");
        },3000)
    })
};
async function getWeatherData(){
    await api();
    await api();
};