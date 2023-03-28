const boxes = document.querySelectorAll(".minor-div");
var turn = "X";
matrix = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
];

function resolveTurn(turn) {
    return turn === "X" ? "0" : "X"
}

function updateMatrix(boxId){
    lineIndex = boxId[0];
    columnIndex = boxId[1];

    matrix[lineIndex - 1][columnIndex - 1] = turn;
}

function checkEndedGame(matrix, boxId){
    lineIndex = boxId[0] - 1;
    columnIndex = boxId[1] - 1;

    horizontalCondition = (matrix[lineIndex][0] == matrix[lineIndex][1] && matrix[lineIndex][1] == matrix[lineIndex][2]);
    verticalCondition = (matrix[0][columnIndex] == matrix[1][columnIndex] && matrix[1][columnIndex] == matrix[2][columnIndex]);

    if (horizontalCondition || verticalCondition){
        alert(`${turn} Ganhou!!!`);
    }
}

boxes.forEach(element => {
    element.onclick = () => {
        if (!element.innerHTML.trim()){
            element.innerHTML = turn;
            var boxId = element.dataset.boxId.split(",");
            updateMatrix(boxId);
            checkEndedGame(matrix, boxId);
            turn = resolveTurn(turn);
        }
    }
});
