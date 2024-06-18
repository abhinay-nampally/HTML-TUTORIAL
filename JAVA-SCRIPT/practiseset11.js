let div=document.querySelector("#one");
let currentMode="blue";
div.addEventListener("mouseover",()=>{
    if(currentMode === "blue"){
        currentMode ="yellow";
        div.classList.add("two");
        div.classList.remove("three");
    }
    else{
        currentMode ="blue";
        div.classList.add("three");
        div.classList.remove("two");
    }
    console.log(currentMode)

})