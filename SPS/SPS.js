let userScore = 0;
let compScore = 0;
const us= document.querySelector("#user-score");
const cs=document.querySelector("#comp-score");
const comp =document.querySelector("#computer");

const choices =document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const showWinner = (userWin) =>{
    if(userWin){
        console.log("you win...!");
        msg.innerText=`You Win..!`;
        msg.style.background="green";
        userScore++;
        us.innerText=userScore;

    }
    else{
        console.log("you lose...!");
        msg.innerText=`You Lose..!`;
        msg.style.background="red";
        compScore++;
        cs.innerText=compScore;

        
    }
};

const genCompChoice = () =>{
const options =["rock","paper","scissors"];
const randIdx= Math.floor(Math.random()*3);
comp.style.display="flex";
if(options[randIdx]==="rock"){
comp.innerHTML="<p>Computer<p><img src='rock.png'>";

}
else if(options[randIdx]==="paper"){
    comp.innerHTML="<p>Computer<p><img src='paper.png' >";
    }
    else{
        comp.innerHTML="<p>Computer<p><img src='scissors.png' >";
    }
return options[randIdx];



};

const drawGame = () =>{

    console.log("game was draw...!");
    msg.innerText=`Game was Draw..!`;
    msg.style.background="yellow";
    msg.style.color="black";

}

const playGame =(userChoice) =>{

    console.log(userChoice);
    //generate computer choice--> module
    const compChoice =genCompChoice();
    console.log(compChoice);

    if(userChoice===compChoice){
       // draw game
       drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            //scissors ,paper
            userWin = compChoice==="paper" ? false : true;
        }
       else if(userChoice==="paper"){
            //scissors ,rock
            userWin = compChoice==="scissors" ? false : true;
        }
        else{

            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id")
       console.log("choice was clicked "+userChoice);
       playGame(userChoice);

    });
});