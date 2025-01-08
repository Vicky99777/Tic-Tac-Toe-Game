let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGamebtn = document.querySelector("#newGame-btn");

let turnO= true // player x , player 0

const winPatterns = [ [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,4,7],[3,4,5],[6,7,8] ];

//Array of array containing patterns winning
boxes.forEach((box) => {
    box.addEventListener("click", () =>
{
console.log("box was clicked");
if(turnO){
box.innerText = "X";
turnO = false;

}else{
    box.innerText = "O";
    turnO = true;
}
box.disabled=true;
// checking winner through function
checkWinner();


});
});
const disableBtns = () =>{
    for(btns of boxes)
    {
        btns.disabled=true;
    }
}
function checkWinner(){
    for(patterns of winPatterns){
       
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;
        if(pos1Val != "" && pos2Val != "" && pos3Val !="")
        {
            if(pos1Val==pos2Val && pos2Val == pos3Val)
            {
                const winner = boxes[patterns[1]].innerText;
                showWinner(winner);
                disableBtns();
            }
        }
    }
}

const showWinner = (winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
newGamebtn.addEventListener("click",()=>{
    turnO=true;
    for(btns of boxes){
        btns.disabled = false;
        btns.innerText = "";
        msgContainer.classList.add("hide");
    }}
);
resetBtn.addEventListener("click",
    ()=>
    {
        for(btns of boxes){
        btns.disabled = false;            
        turnO=true;
        btns.innerText = "";
        }
    }
);