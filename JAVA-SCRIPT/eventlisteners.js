let btn1=document.querySelector("#one");
btn1.addEventListener("click",()=>{
    console.log("button was clicked handler 1");
});
// btn1=document.querySelector("#one");
const handler2=(()=>{
    console.log("button was clicked handler2");
});
btn1.addEventListener("click",handler2);
btn1.removeEventListener("click",handler2);