//Dev -> Aditya Binjagermath   18/01/2025 9:03 PM

//accessing all the btns...
let boxes = document.querySelectorAll(".box1");
let resetBtn = document.querySelector(".btn");
let newGameBtn = document.querySelector("#new-btn");
let msgBox = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
//predefining winning patters...
const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let player1 = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button Clicked!!");
        if (player1) {
            box.innerText = "X";
            player1 = false;
        } else {
            box.innerText = "O";
            player1 = true;
        }
        box.disabled = true;
        checkWineer();
    });
});

const checkWineer = () => {
    for (let pattern of winningPattern) {
 
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2!= "" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
               
                showWinner(pos1);               
            }
        }
    }
};

const disabledBtns =()=>{
    boxes.forEach((box) =>{
        box.disabled = true;
    })
};

const enableBtns =() =>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText ="";
    })
}

const restartGame =()=>{
    player1 = true;
    enableBtns();
    msgBox.classList.add("hide");
}
showWinner = (winner) =>{
    msg.innerText = `Congratulation Player ${winner} Wins!!`;
    msgBox.classList.remove("hide");
    disabledBtns();
};

resetBtn.addEventListener("click",restartGame);
newGameBtn.addEventListener("click",restartGame);