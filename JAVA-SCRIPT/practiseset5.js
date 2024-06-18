// function countVow(str){
//     let count=0;
//     for(char of str){
//         if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u" ){
//             count++;
//             console.log(char);
//         }
//     }
// }
let countVow=(str)=>{
    let count=0;
    for(char of str){
        if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u" ){
            count++;
            //console.log(count);
        }
    }
    console.log(count);
}