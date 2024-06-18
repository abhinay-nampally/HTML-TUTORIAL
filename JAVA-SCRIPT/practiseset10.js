let modeBtn=document.querySelector("#one");
let body=document.querySelector("body");
//let para=document.querySelector("p");
let currentMode="light";

modeBtn.addEventListener("click",()=>{
    if(currentMode === "light"){
        currentMode="dark";
        body.classList.add("two");
        body.classList.remove("three");
      //document.querySelector("body").style.backgroundColor="black";  
    }
    else{
        currentMode="light";
        body.classList.add("three");
        body.classList.remove("two");
        //document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currentMode);
})