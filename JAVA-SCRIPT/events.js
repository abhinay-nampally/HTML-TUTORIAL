let div=document.querySelector("div");
div.onmouseover=(evt)=>{
    console.log("Mouse was entered");
    alert("Get Alert! we are in risk");
    prompt("Why do you Entered");
    console.log(evt.type);
    console.log(evt);
    console.log(evt.clientX,evt.clientY);
    console.log(evt.target);
    let a=3;
    a++;
    console.log(a);
};
// div.onmouseover=(evt)=>{
//     console.log("Mouse was entered ");
//     //alert("Get Alert! we are in risk");
//     //prompt("Why do you Entered");
//     console.log(evt.type);
//     console.log(evt);
//     console.log(evt.clientX,evt.clientY);
//     let a=3;
//     a++;
//     console.log(a);
// }; 
let btn=document.querySelector("button");
btn.onclick= ()=>{
    console.log("button was clicked");
};
//  let btn2=document.querySelector("button");
// btn2.mouseover= ()=>{
//     console.log("this is second time");
// };