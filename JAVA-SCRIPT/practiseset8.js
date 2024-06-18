// let heading=document.querySelector("h2");
// console.dir(heading.innerText);
//   heading.innerText= heading.innerText + "  from Apna College";

let divs=document.querySelectorAll(".box");
//console.log(box[1]);
//console.dir(box[1]);

let i=1;
for( let div of divs){
    div.innerText= `new unique value ${i}   `;
    i++;
}