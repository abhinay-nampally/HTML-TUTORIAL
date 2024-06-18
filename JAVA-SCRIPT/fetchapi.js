const URL=" https://cat-fact.herokuapp.com/facts";
let one=document.querySelector("#one");
let btn=document.querySelector("#two");
let getData=async()=>{
    console.log("fetching data...");
    let response=await fetch(URL);
    console.log(response,status);
    let data= await response.json();
   // console.log(data[0].text);
   one.innerText=data[0].text;
};
btn.addEventListener("click",getData);