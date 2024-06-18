//initial step
let userScore=0;
let compScore=0;
let msg=document.querySelector("#three");
 let userScorePara=document.querySelector("#one");
 let compScorePara=document.querySelector("#two");

//let choices=document.querySelectorAll(".choice");
//let choiceid=document.querySelector()
let drawGame=()=>{
    console.log("Game Was Drawn");
    msg.innerText="GAME was Draw.play Again!";
    msg.style.backgroundColor ="black";
    
    
}
const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        console.log("You Won");
        
        //userScore=document.querySelector("#one");
        userScore++;
        userScorePara.innerText=userScore;
        
        msg.innerText=`You Won,your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        console.log("You Lose");
        //compScore++;
        //compScore=document.querySelector("#two");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You loose, ${compChoice} beaten ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
    }


//1st step
 const choices=document.querySelectorAll(".choice");
 //3rd step
let genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    let randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}
let playGame=((userChoice)=>{
    
    console.log("choice was clicked",userChoice);
    let compChoice=genCompChoice();
    console.log("computer choice is",compChoice);
    
    if(userChoice === compChoice){
        drawGame();
        
    }
    
    else{
        let userWin=true;
    
    if(userChoice === "rock"){
        userWin = compChoice === "paper"?false:true;
    }else if(userChoice === "paper"){
        userWin = compChoice ==="scissors"?false:true;
    }
    else{
        userWin = compChoice === "rock"?false:true;    }
        showWinner(userWin,userChoice,compChoice);}


})

//2nd step
choices.forEach((choice)=>{
    //console.log(choice);
    const userChoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);

    })






});
    