const boxes = document.querySelectorAll(".minor-div");
var turn = "X";

function resolveTurn(turn) {
    return turn === "X" ? "0" : "X"
}

function checkEndedGame(matrix){
    console.log('Not Implemented yet');
}

boxes.forEach(element => {
    element.onclick = () => {
        element.innerHTML = turn;
        turn = resolveTurn(turn)
    }
});
