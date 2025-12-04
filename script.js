let btns = document.querySelectorAll(".button");
let resetbtn = document.querySelector(".reset-btn");
let resetbutton = () => {
  turnO = true;
  enablebox();
  winnerPara.classList.add("hide");
};
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

btns.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

let disablebox = () => {
  for (let box of btns) {
    box.disabled = true;
  }
};
let enablebox = () => {
  for (let box of btns) {
    box.disabled = false;
    box.innerText = "";
  }
};

let winnerPara = document.querySelector(".winner");
let newBtn = document.querySelector(".new-btn");
let showwinner = (winner) => {
  winnerPara.innerText = `Winner is ${winner}`;
  winnerPara.classList.remove("hide");
  disablebox();
};

const checkwinner = () => {
  for (pattern of winPatterns) {
    let pos1 = btns[pattern[0]].innerText;
    let pos2 = btns[pattern[1]].innerText;
    let pos3 = btns[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        showwinner(pos1);
      }
    }
  }
};

resetbtn.addEventListener("click", resetbutton);
